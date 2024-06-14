import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/db/schema"
import { createUser, getUserByEmail } from "./services/userService"
import { verifyPassword } from "./services/authService"



 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        }
      }
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials?.email || !credentials?.password) {
           return null;
        }

        const user = await getUserByEmail(credentials?.email as string);
        if (user && user.password && await verifyPassword(credentials?.password as string, user.password)) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    
  }
})
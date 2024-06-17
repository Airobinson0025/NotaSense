import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/db/schema"
import { getUserByEmail } from "./services/userService"
import { verifyPassword } from "./services/authService"



 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
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
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("No credentials provided")
          }

          const user = await getUserByEmail(credentials.email as string)
          console.log(user, 'NextAuth user')
          if (!user) {
            throw new Error("User not found")
          }
          
          const validatedPassword = await verifyPassword(credentials.password as string, user.password as string)

          if (!validatedPassword) {
            throw new Error("Password not validated")
          }

          return { id: user.id, email: user.email, name: user.name }

        } catch (error) {
          console.error(error)
          throw error
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        name: token.name as string,
        emailVerified: token.emailVerified as Date,
      }
      return session;
    }
  }
})
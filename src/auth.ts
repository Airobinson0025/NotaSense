import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import Google from "next-auth/providers/google"
import { db } from "@/db/schema"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Google,
    Credentials({
      credentials: {
        email: {},
        password: {}
      }
    })
  ],
})
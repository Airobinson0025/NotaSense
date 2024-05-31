import { db } from "@/db/schema";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

export const createUser = async (email: string, password: string) => {
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert the user into the database
    const user = await db. insert(users).values({
        email,
        password: hashedPassword,
    }). returning()

    return user;
}
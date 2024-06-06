import { db } from "@/db/schema";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

export const getUserByEmail = async ( email: string ) => {
    // get the user from the database
    const userByEmail = await db.select().from(users).where((user) => eq(user.email, email));

    return userByEmail[0];

}

export const createUser = async (name: string, email: string, password: string) => {
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert the user into the database
    const newUser = await db. insert(users).values({
        name,
        email,
        password: hashedPassword,
    }). returning()


    return newUser;
}
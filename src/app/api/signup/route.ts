import { NextResponse, NextRequest } from "next/server";
import { createUser } from "@/services/userService";
import { getUserByEmail } from "@/services/userService";

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }
        
        //check if user already exists
        if(await getUserByEmail(email)) {
            return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
        }

        //create user
        const user = await createUser(name, email, password);

        return NextResponse.json({ user: user, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
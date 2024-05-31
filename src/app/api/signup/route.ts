import { NextResponse, NextRequest } from "next/server";
import { createUser } from "@/services/userService";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        //create user
        const user = await createUser(email, password);

        return NextResponse.json({ user: user, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
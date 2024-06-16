import { NextResponse } from "next/server";
import { signIn } from "next-auth/react";


export async function handleSignIn(email: string, password: string) {
    try{
        const response = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        });
        
        if(response?.ok) {
            return NextResponse.json({ message: "User signed in successfully" }, { status: 200 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
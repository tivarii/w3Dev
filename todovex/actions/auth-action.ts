'use server'

import { signIn } from "@/auth"
import { signOut } from "next-auth/react";

export async function signInAction(){
    await signIn("google",{redirectTo:"/loggedin"});
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
  }
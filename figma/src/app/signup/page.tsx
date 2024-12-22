"use client"

import Link from "next/link";
import { useActionState } from "react";
import { register } from "../actions/auth";

export default function page() {
    const [errorMessage, formAction, isPending] = useActionState(
        register,
        undefined
    )
    return <div className="flex min-h-screen items-center justify-center bg-red-500 px-4">
        <div className="max-w-sm w-full space-y-6 bg-red-300">
            <h1 className="text-center text-2xl font-semibold text-gray-900 ">
                Sign up
            </h1>
            <form action={formAction} className="space-y-4">
                <div className="relative h-fit">
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full 
                    rounded-md 
                    border-gray-300 text-sm  
                    px-3 py-1 pt-7 
                    focus:border-black focus:outline-none"/>
                    <label className="absolute left-3 top-2 text-[12px] ">EMAIL</label>
                </div>
                <div className="relative h-fit">
                    <input
                        type="password"
                        name="password"
                        required
                        minLength={8}

                        className="w-full 
                    rounded-md 
                    border-gray-300 text-sm  
                    px-3 py-1 pt-7 
                    focus:border-black focus:outline-none"/>
                    <label className="absolute left-3 top-2 text-[12px] ">PASSWORD</label>
                </div>
                <button className="w-full rounded-md bg-black text-white
                py-2 font-medium hover:bg-gray-900 focus:outline-none disabled:cursor-not-allowed 
                disabled:bg-gray-300">
                    Register
                </button>
                <p className="
                text-center 
                text-xs 
                text-gray-600">Have an account?{" "}
                    <Link className="text-blue-400 hover:text-blue-600" href="/signin">Register</Link>
                </p>
                {errorMessage && (
                    <p className="text-center text-sm text-red-500 ">{errorMessage}</p>
                )}
            </form>
        </div>
    </div>
}
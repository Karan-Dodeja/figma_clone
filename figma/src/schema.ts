import { object, string } from "zod";
export const signUpSchema = object({
    email: string({ required_error: "Email is required" }).email("Invalid email"),
    password: string({ required_error: "Password is required" }).min(8, "Password must be 8 character long").max(32, "Max 32 characters long")
})

export const signInSchema = object({
    email: string({ required_error: "Email is required" }).email("Invalid email"),
    password: string({ required_error: "Password is required" })
})
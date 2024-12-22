"use server";

import { ZodError } from "zod";
import { signInSchema, signUpSchema } from "~/schema";
import { db } from "~/server/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { signIn } from "~/server/auth";
import { AuthError } from "next-auth";

export async function signOut() {
    await signOut();
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials!";
        default:
          return "Something went wrong!";
      }
    }
    throw error;
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const { email, password } = await signUpSchema.parseAsync({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return "User already exists!";
    }
    const hash = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        email: email,
        password: hash,
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return error.errors.map((e) => e.message).join(", ");
    }
  }

  redirect("/signin");
}

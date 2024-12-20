"use server";
import { cookies } from "next/headers";

export default async function AddCookie(accessToken: string) {
  (await cookies()).set("access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
}

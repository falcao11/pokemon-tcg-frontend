"use server";
import { cookies } from "next/headers";

export default async function Cookies() {
  const cookie = (await cookies()).get("access_token")?.value;
  return cookie;
}

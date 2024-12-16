"use server";
import { cookies } from "next/headers";

export default async function deleteCookie() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("access_token");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

"use server";
import { cookies } from "next/headers";
import api from "../services/api";

export async function getAllCollections(): Promise<string> {
  // console.log("Api URL: ", process.env.NEXT_PUBLIC_DATABASE_URL);
  const cookie = (await cookies()).get("access_token")?.value;

  const response = await api.get("collections", {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response: ", response.data.collections);
  return response.data.collections;
}

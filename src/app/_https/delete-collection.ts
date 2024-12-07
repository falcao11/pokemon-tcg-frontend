"use server";
import { cookies } from "next/headers";
import api from "../services/api";

export default async function DeleteCollection(
  collection_id: string
): Promise<number> {
  const cookie = (await cookies()).get("access_token")?.value;

  const response = await api.delete("collections/" + collection_id, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response delete: ", response.status);
  return response.status;
}

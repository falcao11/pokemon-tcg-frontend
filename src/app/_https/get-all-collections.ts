import api from "../services/api";
import Cookies from "../services/cookies";

export async function getAllCollections(): Promise<string> {
  // console.log("Api URL: ", process.env.NEXT_PUBLIC_DATABASE_URL);
  const cookie = Cookies();

  const response = await api.get("collections", {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response: ", response.data.collections);
  return response.data.collections;
}

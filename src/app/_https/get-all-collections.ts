import api from "../services/api";
import Cookies from "../services/cookies";

export async function getAllCollections(): Promise<string> {
  const cookie = await Cookies();

  const response = await api.get("collections", {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response: ", response.data.collections);
  return response.data.collections;
}

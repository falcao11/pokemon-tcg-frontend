import api from "../services/api";
import Cookies from "../services/cookies";

export default async function DeleteCollection(
  collection_id: string
): Promise<number> {
  const cookie = await Cookies();

  const response = await api.delete("collections/" + collection_id, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response delete: ", response.status);
  return response.status;
}

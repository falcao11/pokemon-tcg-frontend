import api from "../services/api";
import Cookies from "../services/cookies";

export default async function getCardsCollection(set_id: string) {
  const cookie = Cookies();

  const response = await api.get("/cards/" + set_id, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response getCardsCollection: ", response.data.data);

  return response.data.data;
}

import api from "../services/api";
import Cookies from "../services/cookies";

export default async function getCard(card_id: string) {
  const cookie = await Cookies();

  const response = await api.get("/cards/" + card_id, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });

  console.log("Get Card: ", response.data.data);

  return response.data.data;
}

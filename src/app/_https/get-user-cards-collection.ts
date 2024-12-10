import { CardInterface } from "../_interface/card-interface";
import api from "../services/api";
import Cookies from "../services/cookies";

export default async function userCardsCollection(
  id: string
): Promise<CardInterface> {
  const cookie = Cookies();

  const response = await api.get("/collections/" + id + "/cards", {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response UserCardsCollection: ", response);
  const cards = response.data.map((card: any) => {
    return {
      card_collection_id: card.card_collection_id,
      card_id: card.card_id,
      collection_id: card.collection_id,
    };
  });

  return cards;
}

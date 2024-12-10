import axios from "axios";
import { CardCollectionInterface } from "../_interface/card-collection";
import api from "../services/api";
import Cookies from "../services/cookies";

export default async function CreateCardCollection({
  cards,
  collection_id,
}: CardCollectionInterface) {
  try {
    console.log("Card ID: ", cards);
    const cookie = Cookies();
    const response = await api.post(
      "/collections/" + collection_id + "/cards",
      {
        cards: cards,
      },
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );
    console.log("Response: ", response);
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log("Error: ", error.response.data.message);
      return {
        success: false,
        message: error.response.data.message,
      };
    } else {
      console.log("Error: ", error);
      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }
}

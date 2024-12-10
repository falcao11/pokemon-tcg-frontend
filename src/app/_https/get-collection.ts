import axios from "axios";
import api from "../services/api";
import Cookies from "../services/cookies";

export async function getCollection(collection_id: string) {
  try {
    // console.log("Api URL: ", process.env.NEXT_PUBLIC_DATABASE_URL);
    const cookie = Cookies();

    const response = await api.get("collections/" + collection_id, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    console.log("Response getCollection: Cheguei");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log("Error getCollection: ", error.response.data);
      return {
        success: false,
        status: error.response.status,
        message: error.response.data.message,
      };
    } else {
      console.log("Error getCollection: ", error);
      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }
}

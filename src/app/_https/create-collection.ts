import axios from "axios";
import { SetInterface } from "../_interface/set-interface";
import api from "../services/api";
import Cookies from "../services/cookies";

export default async function CreateCollection({ set_id, name }: SetInterface) {
  try {
    const cookie = await Cookies();
    const response = await api.post(
      "/collections",
      {
        name: name,
        set_id: set_id,
      },
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );
    console.log("Response: ", response);
    return response.data;
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

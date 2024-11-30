import axios from "axios";
import { SetTypes } from "../_types/set-types";
import api from "../services/api";

export default async function CreateCollection({ ...props }: SetTypes) {
  try {
    const response = await api.post("/collection", {
      name: props.name,
      set_id: props.set_id,
    });
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

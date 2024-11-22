import axios from "axios";
import { SignUpType } from "../_types/signup-types";
import api from "../services/api";

export default async function Register({ ...props }: SignUpType) {
  try {
    const response = await api.post("/signup", {
      username: props.username,
      email: props.email,
      password: props.password,
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

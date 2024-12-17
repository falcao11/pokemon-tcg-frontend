import axios from "axios";
import { SignUpInterface } from "../_interface/signup-interface";
import api from "../services/api";

export default async function Register({ ...props }: SignUpInterface) {
  // console.log("Props: ", props.image?.name);
  try {
    // const image = await api.post("/signup/upload", {
    //   file: props.image,
    // });

    // console.log("Image: ", image.data.image);

    const response = await api.post("/signup", {
      username: props.username,
      email: props.email,
      password: props.password,
      // image: image.data.image,
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

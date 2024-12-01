"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { SetTypes } from "../_types/set-types";
import api from "../services/api";

export default async function CreateCollection({ set_id, name }: SetTypes) {
  try {
    const cookie = (await cookies()).get("access_token")?.value;
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

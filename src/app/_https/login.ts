"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { LoginInterface } from "../_interface/login-interface";
import api from "../services/api";

export default async function Login({ email, password }: LoginInterface) {
  try {
    const response = await api.post("/login", {
      email: email,
      password: password,
    });
    //console.log("Response: ", response.data.access_token);
    // Assuming the response contains an access token
    const accessToken = response.data.access_token;

    console.log("Access Token: ", accessToken);

    //Set the cookie with the access token
    (await cookies()).set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log("Error: ", error.response.data.message);
      throw new Error("Invalid email or password");
    } else {
      console.log("Error: ", error);
      throw new Error("An unexpected error occurred");
    }
  }
}

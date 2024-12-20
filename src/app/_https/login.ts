import { LoginInterface } from "../_interface/login-interface";
import AddCookie from "../services/add-cookie";
import api from "../services/api";

export default async function Login({ email, password }: LoginInterface) {
  const response = await api.post("/login", {
    email: email,
    password: password,
  });

  const accessToken = response.data.access_token;

  await AddCookie(accessToken);

  return response.data;
}

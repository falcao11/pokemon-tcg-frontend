import api from "../services/api";

export async function getHello(): Promise<string> {
  // console.log("Api URL: ", process.env.NEXT_PUBLIC_DATABASE_URL);
  const response = await api.get("/hello");
  return response.data;
}

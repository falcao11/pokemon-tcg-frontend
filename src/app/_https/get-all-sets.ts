import api from "../services/api";
import Cookies from "../services/cookies";

export async function getAllSets() {
  const cookie = Cookies();

  const response = await api.get("/sets", {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response getAllSets: ", response.data);

  return response.data.data;
}

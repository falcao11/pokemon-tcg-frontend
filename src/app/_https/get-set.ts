import { SetInterface } from "../_interface/set-interface";
import api from "../services/api";
import Cookies from "../services/cookies";

export async function getSet(id: string): Promise<SetInterface> {
  // const response = await fetch("https://api.pokemontcg.io/v2/sets/" + id);
  // const result = await response.json();
  // console.log("Set: ", result.data);
  // return result.data;

  const cookie = Cookies();

  const response = await api.get("/sets/" + id, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  console.log("Response getAllSets: ", response.data);

  return response.data.data;
}

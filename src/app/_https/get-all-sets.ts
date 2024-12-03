import { SetInterface } from "../_interface/set-interface";

export async function getAllSets(): Promise<SetInterface> {
  const response = await fetch("https://api.pokemontcg.io/v2/sets");
  const result = await response.json();
  console.log("All Set: ", result.data);
  return result.data;
}

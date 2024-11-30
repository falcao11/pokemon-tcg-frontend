import { SetTypes } from "../_types/set-types";

export async function getAllSets(): Promise<SetTypes> {
  const response = await fetch("https://api.pokemontcg.io/v2/sets");
  const result = await response.json();
  console.log("All Set: ", result.data);
  return result.data;
}

import { SetTypes } from "../_types/set-types";

export async function getSet(id: string): Promise<SetTypes> {
  const response = await fetch("https://api.pokemontcg.io/v2/sets/" + id);
  const result = await response.json();
  console.log("Set: ", result.data);
  return result.data;
}

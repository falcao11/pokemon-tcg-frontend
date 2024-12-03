export default async function getCardsCollection(set_id: string) {
  const response = await fetch(
    "https://api.pokemontcg.io/v2/cards?q=set.id:" + set_id + "&orderBy=number"
  );
  const result = await response.json();
  console.log("Cards Collection: ", result.data);
  return result.data;
}

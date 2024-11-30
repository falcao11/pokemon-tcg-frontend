import api from "../services/api";

export async function getCollection(id: string): Promise<string> {
  const response = await api.get("collection/" + id);
  return response.data;
}

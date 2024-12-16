import deleteCookie from "../services/delete-cookie";

export default async function LogOut() {
  return await deleteCookie();
}

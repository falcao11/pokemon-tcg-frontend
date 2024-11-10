import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
});

export default api;

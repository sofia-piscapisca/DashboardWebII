import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-node-test-6c4b0a5d4c87.herokuapp.com",
});

api.interceptors.request.use((config) => {
  const tokeN = localStorage.getItem("token");
  if(tokeN) config.headers.Authorization = `Bearer ${tokeN}`;
  return config;
});
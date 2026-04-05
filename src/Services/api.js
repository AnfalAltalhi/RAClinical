import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL ?? "";

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};
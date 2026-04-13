import { API_URL } from "./api";


export const login = async (data) => {
  const response = await fetch(`${API_URL}/api/Auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(data),
  });
  return response.json();
}

export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/api/Auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to register");
  }

  return res.json();
};



import axios from "axios";

export const API_BASE_URL = "http://localhost:8081";
const jwt = localStorage.getItem("jwt");

// api created to prevent setting headers for each api call
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});

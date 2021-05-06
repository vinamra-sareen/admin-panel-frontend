import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.8.0.149:5000/api/v1",
});

import { api } from "./index";

export const getUser = async () => {
  return await api.get("/users");
};

export const authenticate = async (data) => {
  return await api.post("/users/authenticate", { ...data });
};

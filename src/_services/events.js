import { api } from "./index";

export const create = async (data) => {
  return await api.post("/events", { ...data });
};

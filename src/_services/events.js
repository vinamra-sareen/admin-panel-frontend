import { api } from "./index";
import { authenticationService } from "./authentication.service";

export const getByUsername = async () => {
  const { username } = authenticationService.currentUserValue;
  return await api.get("/events/findBy", {
    params: { username },
  });
};

export const create = async (data) => {
  return await api.post("/events", { ...data });
};

import { api } from "./index";
import { authenticationService } from "./authentication.service";

export const getModules = async () => {
   const token = authenticationService.getToken();
   console.log(token);
   return await api.get("/get_modules", {
    headers: {
        'x-auth-token': token        
    },
  });
};


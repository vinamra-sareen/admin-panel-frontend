import { api } from "./index";
import { authenticationService } from "./authentication.service";

export const getModules = async (module_id = null) => {
   const token = authenticationService.getToken();
   return await api.get("/get_modules", {
    headers: {
        'x-auth-token': token        
    },
    params: {
      module_id
    }
  });
};

export const getUserBankReportDetails = async (data) => {
  const token = authenticationService.getToken();
  return await api.get("/admin/get_bank_details_report", {
   headers: {
       'x-auth-token': token        
   },
   params: {
     ...data
   }
 });
};
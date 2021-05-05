import Module from "./pages/dashboard/module";
import UserBankDetailsReport from "./pages/dashboard/admin_compliance/user_bank_details_report";

export const routes = [
  {
    path: "/admin/admin_compliance",
    name: "Admin Compliance",
    component: Module,
    exact: true,
  },
  {
    path: "/admin/business_report",
    name: "Business Report",
    component: Module,
  },
  {
    path: "/admin/admin_compliance/getBankDetailReport",
    name: "Bank Details Report",
    component: UserBankDetailsReport,
  },
];

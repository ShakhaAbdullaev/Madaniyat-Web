import { ApiService } from "./api";

const AccountService = {
  SignIn(data) {
    return ApiService.post("/Account/SignIn", data);
  },
  GetUserInfo() {
    return ApiService.get("/Account/GetUserInfo");
  },
  IsUserRegistered(data) {
    return ApiService.post("/Account/IsUserRegistered", data);
  },
  SendSMSCode(data) {
    return ApiService.post("/Account/SendSMSCode", data);
  },
  GetByPassportData(data){
    return ApiService.post("/Account/GetByPassportData", data);
  },
  Register(data) {
    return ApiService.post("/Account/Register", data);
  },
  CheckSMSCode(data) {
    return ApiService.post("/Account/CheckSMSCode", data);
  },
  Logout() {
    return ApiService.get("/Account/Logout");
  }
};

export default AccountService;

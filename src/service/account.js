import { ApiService } from "./api";

const AccountService = {
  SignIn(data) {
    return ApiService.post("/Account/SignIn", data);
  },
  GetUserInfo() {
    return ApiService.get("/Account/GetUserInfo");
  },
};

export default AccountService;

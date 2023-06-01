import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

//login
export async function loginWs(data): Promise<any> {
  const response = await api.post("/auth/login/user", data);
  return response;
}

//signup
export const signupWs = (data) =>
  api
    .post("/auth/signup/user", data)
    .then(successStatus)
    .catch(internalServerError);
//logout
export const logoutWs = () =>
  api.get("/auth/logout").then(successStatus).catch(internalServerError);

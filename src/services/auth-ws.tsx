import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";
import { AxiosResponse } from "axios";

//login
export async function loginWs(
  data: LogInFormData
): Promise<SuccessResponse | ServerErrorResponse> {
  try {
    const response = await api.post("/auth/login/user", data);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

//signup
export async function signupWs(
  data: SignInFormData
): Promise<SuccessResponse | ServerErrorResponse> {
  try {
    const response = await api.post("/auth/signup/user", data);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

//logout
export async function logoutWs(): Promise<
  SuccessResponse | ServerErrorResponse
> {
  try {
    const response = await api.post("/auth/logout");
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

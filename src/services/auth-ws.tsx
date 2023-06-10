import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

//login
export async function loginWs(
  data: LogInFormData
): Promise<SuccessResponse<Partial<User | Chef>> | ServerErrorResponse> {
  try {
    const response = await api.post("/auth/login/user", data);
    return successStatus(response);
  } catch (error: unknown) {
    console.log(error);
    return internalServerError(error as ErrorResponse);
  }
}

//signup
export async function signupWs(
  data: SignInFormData
): Promise<SuccessResponse<Partial<User | Chef>> | ServerErrorResponse> {
  try {
    const response = await api.post("/auth/signup/user", data);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

interface SuccessLogOutResponse {
  status: true;
  message: string;
}

export async function logoutWs(): Promise<
  SuccessLogOutResponse | ServerErrorResponse
> {
  try {
    const response = await api.post("/auth/logout");
    return {
      status: true,
      message: response.data || "Logged out successfully",
    };
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

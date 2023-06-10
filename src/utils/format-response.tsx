import { AxiosResponse } from "axios";

export function internalServerError(error: unknown): ServerErrorResponse {
  const err = error as ErrorResponse;
  const errorMessage =
    err?.response?.data?.errorMessage ||
    "Internal server error. Please check your server";
  return {
    status: false,
    errorMessage,
  };
}

export function successStatus<T>(res: AxiosResponse<T>): SuccessResponse<T> {
  console.log("response from server", res);
  return {
    status: true,
    data: res.data,
  };
}

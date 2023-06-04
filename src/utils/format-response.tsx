import { AxiosResponse } from "axios";

export function internalServerError(err: ErrorResponse): ServerErrorResponse {
  if (err.response?.data?.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

export function successStatus<T>(res: AxiosResponse<T>) {
  console.log("response from server", res);
  return {
    status: true,
    data: res.data,
  };
}

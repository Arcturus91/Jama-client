import { internalServerError, successStatus } from "../utils/format-response";
import { api } from "./api";

export async function getAvailableMealsWs(): Promise<
  SuccessResponse | ServerErrorResponse
> {
  try {
    const response = await api.get("/availablemeals");
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

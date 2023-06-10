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

export async function getMealDetailWs(
  mealId: string
): Promise<SuccessResponse | ServerErrorResponse> {
  try {
    const response = await api.get(`/availablemeals/${mealId}`);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

export async function createMealWs(
  data: Partial<Meal>
): Promise<SuccessResponse | ServerErrorResponse> {
  try {
    const response = await api.post("/chef/createmeal", data);
    console.log("meal ws", response);
    return successStatus(response);
  } catch (error: unknown) {
    console.log(error);
    return internalServerError(error as ErrorResponse);
  }
}

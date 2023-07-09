import { internalServerError, successStatus } from "../utils/format-response";
import { api } from "./api";

export async function getAvailableMealsWs(): Promise<
  SuccessResponse<[Meal]> | ServerErrorResponse
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
): Promise<SuccessResponse<Meal> | ServerErrorResponse> {
  try {
    const response = await api.get(`/availablemeals/${mealId}`);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

export async function createMealWs(
  data: Partial<Meal>
): Promise<SuccessResponse<Meal> | ServerErrorResponse> {
  try {
    const response = await api.post<Meal>("/chef/createmeal", data);
    console.log("meal ws", response);
    return successStatus(response);
  } catch (error) {
    console.log(error);
    return internalServerError(error);
  }
}

export async function deleteMealWs(
  mealId: string
): Promise<SuccessResponse<Meal> | ServerErrorResponse> {
  try {
    const response = await api.delete(`/chef/deletemeal/${mealId}`);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}
  export async function updateMealWs(
    mealId: string, updateData: Partial<Meal>
  ): Promise<SuccessResponse<Meal> | ServerErrorResponse> {
    try {
      const response = await api.patch(`/chef/updatemeal/${mealId}`,updateData);
      return successStatus(response);
    } catch (error: unknown) {
      return internalServerError(error as ErrorResponse);
    }
  }


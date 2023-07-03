import { internalServerError, successStatus } from "../utils/format-response";
import { api } from "./api";

export async function getUserDetailWs(
  userId: string
): Promise<SuccessResponse<User> | ServerErrorResponse> {
  try {
    const response = await api.get(`/user/${userId}`);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

export async function createMealOrderWs(
  data: MealOrder
): Promise<SuccessResponse<Order> | ServerErrorResponse> {
  try {
    const response = await api.post<Order>("addmealorder", data);
    //the Order type specifies the expected response type of the promise.
    console.log("order ws", response);
    return successStatus(response);
  } catch (error) {
    console.log(error);
    return internalServerError(error);
  }
}

export async function updateUserWs(userId: string, updateData: Partial<User>) {
  try {
    const response = await api.put(`/user/updateuser/${userId}`, updateData);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

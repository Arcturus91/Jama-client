import { internalServerError, successStatus } from "../utils/format-response";
import { api } from "./api";

export async function getAllPendingOrdersWs(): Promise<
  SuccessResponse<[Order]> | ServerErrorResponse
> {
  try {
    const response = await api.get("/admin/allpendingorders");
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

export async function updateOrderStatusWs(
    orderId: string,
    updateData: Partial<Order>
): Promise<
  SuccessResponse<Order> | ServerErrorResponse
> {
  try {
    const response = await api.patch(`/admin/updateorder/${orderId}`,updateData);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

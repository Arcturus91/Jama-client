import { internalServerError, successStatus } from "../utils/format-response";
import { api } from "./api";

export async function getChefDetailWs(
  chefId: string
): Promise<SuccessResponse | ServerErrorResponse> {
  try {
    const response = await api.get(`/chef/${chefId}`);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

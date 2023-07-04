import { internalServerError, successStatus } from "../utils/format-response";
import { api } from "./api";

export async function getChefDetailWs(
  chefId: string
): Promise<SuccessResponse<Chef> | ServerErrorResponse> {
  try {
    const response = await api.get(`/chef/${chefId}`);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

export async function updateChefWs(chefId: string, updateData: Partial<Chef>) {
  try {
    const response = await api.patch(`/chef/updatechef/${chefId}`, updateData);
    return successStatus(response);
  } catch (error: unknown) {
    return internalServerError(error as ErrorResponse);
  }
}

export async function getAllChefsWs (){
  try{
    const response = await api.get("/chef/getallchef");
    return successStatus(response);
  } catch(error: unknown){
    return internalServerError(error as ErrorResponse);
  }
}

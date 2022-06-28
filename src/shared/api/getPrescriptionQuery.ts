import axios from "axios";
import { apiEndpoint } from "./constants";

export interface GetPrescriptionRequest {
  id: string;
}

export type GetPrescriptionResponse = {
  doctorId: string;
  createdAt: string;
  recepts: string[];
  updatedAt: string;
  userId: string;
  diagnosis: string;
};

export const getPrescriptionQuery = async (
  request: GetPrescriptionRequest
): Promise<GetPrescriptionResponse> => {
  const url = `${apiEndpoint}/med/prescription/${request.id}`;
  const { data } = await axios.get(url);

  return data;
};

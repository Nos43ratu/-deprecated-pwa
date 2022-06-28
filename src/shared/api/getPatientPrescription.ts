import axios from "axios";
import { apiEndpoint } from "./constants";

export interface GetPatientPrescriptionRequest {
  id: string;
}

export type GetPatientPrescriptionResponse = {
  code: string;
  message: number;
};

export const getPatientPrescriptionQuery = async (
  request: GetPatientPrescriptionRequest
): Promise<GetPatientPrescriptionResponse> => {
  const url = `${apiEndpoint}/med/prescription/user/${request.id}`;
  const { data } = await axios.get(url);

  return data;
};

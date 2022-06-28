import axios from "axios";
import { apiEndpoint } from "./constants";

export interface AddPrescriptionRequest {
  userId: string;
  diagnosis?: string;
  doctorId?: string;
}

export type AddPrescriptionResponse = {
  _id: string;
  userId: string;
  diagnosis: string;
};

const url = `${apiEndpoint}/med/prescription`;

export const addPrescriptionMutation = async (
  request: AddPrescriptionRequest
): Promise<AddPrescriptionResponse> => {
  const { data } = await axios.post(url, request);
  return data;
};

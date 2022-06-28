import axios from "axios";
import { apiEndpoint } from "./constants";

export interface AddReceptRequest {
  color: string;
  dosage: string;
  dosageType: string;
  medicineName: string;
  medicineType: string;
  notes: string;
  userId: string;
  doctorId: string;
  period_Of_date: string;
  isActive: boolean;
  prescription: string;
}

export type AddReceptnResponse = {
  _id: string;
  userId: string;
  diagnosis: string;
};

const url = `${apiEndpoint}/med/recept`;

export const addReceptMutation = async (
  request: AddReceptRequest
): Promise<AddReceptnResponse> => {
  const { data } = await axios.post(url, request);
  return data;
};

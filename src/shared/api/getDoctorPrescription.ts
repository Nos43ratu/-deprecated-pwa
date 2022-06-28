import axios from "axios";
import { apiEndpoint } from "./constants";

export interface GetDoctorPrescriptionRequest {
  id: string;
}

export type GetDoctorPrescriptionResponse = {
  doctorId: string;
  createdAt: string;
  recepts: string[];
  updatedAt: string;
  userId: string;
};

export const getDoctorPrescriptionQuery = async (
  request: GetDoctorPrescriptionRequest
): Promise<GetDoctorPrescriptionResponse> => {
  const url = `${apiEndpoint}/med/prescription/doctor/${request.id}`;
  const { data } = await axios.get(url);

  return data;
};

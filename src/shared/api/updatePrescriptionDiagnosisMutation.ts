import axios from "axios";
import { apiEndpoint } from "./constants";

export interface UpdatePrescriptionDiagnisisRequest {
  id: string;
  diagnosis: string;
}

export type UpdatePrescriptionDiagnisisResponse = {
  code: string;
  message: number;
};

export const UpdatePrescriptionDiagnisisMutation = async ({
  diagnosis,
  id,
}: UpdatePrescriptionDiagnisisRequest): Promise<UpdatePrescriptionDiagnisisResponse> => {
  const url = `${apiEndpoint}/med/prescription/${id}`;
  const { data } = await axios.put(url, { diagnosis });

  return data;
};

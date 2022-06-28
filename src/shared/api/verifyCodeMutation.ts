import axios from "axios";
import { apiEndpoint } from "./constants";

export interface VerifyRequest {
  contactNumber: string;
}

export type VerifyResponse = {
  code: string;
  message: number;
};

const url = `${apiEndpoint}/med/sms`;

export const verifyCodeMutation = async (
  request: VerifyRequest
): Promise<VerifyResponse> => {
  const { data } = await axios.post(url, request);
  return data;
};

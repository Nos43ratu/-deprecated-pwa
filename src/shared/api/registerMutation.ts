import axios from "axios";
import { apiEndpoint } from "./constants";

export interface RegisterRequest {
  name?: string;
  surname?: string;
  birthDate?: string;
  email?: string;
  gender?: string;
  contactNumber?: string;
  password?: string;
  role?: "doctor" | "patient";
}

export type RegisterResponse = {
  _id: string;
  token: string;
};

const url = `${apiEndpoint}/med/auth/register`;

export const registerMutation = async (
  request: RegisterRequest
): Promise<RegisterResponse> => {
  const { data } = await axios.post(url, request);
  return data;
};

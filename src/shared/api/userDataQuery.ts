import axios from "axios";
import { apiEndpoint } from "./constants";

export interface UserDataRequest {
  userId: string;
}

export type UserDataResponse = {
  confirmed: string;
  _id: string;
  password: string;
  contactNumber: string;
  email: string;
  name: string;
  surname: string;
  birthDate: string;
  gender: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export const userDataQuery = async (
  request: UserDataRequest
): Promise<UserDataResponse> => {
  const url = `${apiEndpoint}/med/users/${request.userId}`;
  const { data } = await axios.get(url);
  return data;
};

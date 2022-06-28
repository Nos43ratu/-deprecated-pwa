import { useMutation, UseMutationOptions } from "react-query";
import axios, { AxiosError } from "axios";
import { apiEndpoint } from "./constants";

export interface LoginRequest {
  contactNumber: string;
  password: string;
}

export type LoginResponse = {
  access: string;
  refresh: string;
};

const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const { data } = await axios.post(url, request);
  return data;
};

const url = `${apiEndpoint}/med/auth/login`;

export const useLogin = (
  options?: UseMutationOptions<LoginResponse, AxiosError, LoginRequest>
) => useMutation("login", login, options);

import axios from "axios";
import { apiEndpoint } from "./constants";

export interface GetCalendarRequest {
  id: string;
}

export type GetCalendarResponse = {
  days: string[];
  times: string[];
  _id: string;
  frequency: string;
  startDate: string;
  endDate: string;
  receptId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}[];

export const getCalendar = async (
  request: GetCalendarRequest
): Promise<GetCalendarResponse> => {
  const url = `${apiEndpoint}/med/calendar/user/${request.id}`;
  const { data } = await axios.get(url);

  return data;
};

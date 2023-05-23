import axios from "axios";
export const baseApiUrl = "https://api-training.hrm.div4.pgtest.co/api/v1/";

export const axiosClient = axios.create({
  baseURL: baseApiUrl,
});

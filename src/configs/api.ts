import axios, { AxiosHeaderValue } from "axios";
import { onLogout } from "../services/auth/logout";
import { store } from "../redux/store";
export const baseApiUrl = "https://api-training.hrm.div4.pgtest.co/api/v1/";

export const axiosClient = axios.create({
  baseURL: baseApiUrl,
});

export const axiosPrivate = axios.create({
  baseURL: baseApiUrl,
});

axiosPrivate.interceptors.response.use(
  (res) => {
    res.data.data.data = res.data.data.data.map((item: any) => ({
      ...item,
      gender: item.gender ? "male" : "female",
    }));

    return res.data.data;
  },
  (error) => {
    onLogout();
  }
);

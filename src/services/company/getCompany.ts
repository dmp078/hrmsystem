import { axiosClient } from "../../configs/api";
import { RESPONSE_SUCCESS } from "../../configs/responses-code";

export const getCompany = async () => {
  const res = await axiosClient.get("/company");
  if (res.status == RESPONSE_SUCCESS) {
    return res.data.data;
  }

  return res.status;
};

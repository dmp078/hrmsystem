import { axiosClient } from "../../configs/api";

export const getCompany = async () => {
  try {
    const res = await axiosClient.get("/company");
    return res.data.data;
  } catch (er) {
    console.log(er);
  }
};

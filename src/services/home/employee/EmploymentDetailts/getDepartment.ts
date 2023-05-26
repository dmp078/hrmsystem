import { store } from "../../../../redux/store";
import { axiosClient } from "../../../../configs/api";

export const getDepartment = async () => {
  try {
    const res = await axiosClient("department", {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
    });

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

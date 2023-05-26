import { axiosClient } from "../../../../configs/api";
import { store } from "../../../../redux/store";

export const getGrade = async () => {
  try {
    const res = await axiosClient("grade", {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
    });

    return res.data.data;
  } catch (er) {
    console.log(er);
  }
};

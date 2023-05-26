import { axiosClient } from "../../../../configs/api";
import { store } from "../../../../redux/store";

export const getMarriageStatus = async () => {
  try {
    const res = await axiosClient.get("marriage", {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
    });

    return res.data.data;
  } catch (er) {
    console.log(er);
  }
};

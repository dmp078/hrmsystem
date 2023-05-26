import { store } from "../../../../redux/store";
import { axiosClient } from "../../../../configs/api";

export const getPosition = async () => {
  try {
    const res = await axiosClient("position", {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
    });

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

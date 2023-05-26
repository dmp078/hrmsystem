import { axiosClient } from "../../../../configs/api";
import { store } from "../../../../redux/store";

export const getBenefits = async (grade_id: number = 0) => {
  try {
    const res = await axiosClient("benefit", {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
      params: {
        grade_id: grade_id,
      },
    });

    return res.data.data;
  } catch (er) {
    console.log(er);
  }
};

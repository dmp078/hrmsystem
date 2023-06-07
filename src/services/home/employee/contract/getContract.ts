import { axiosClient } from "../../../../configs/api";
import { store } from "../../../../redux/store";

export const getContract = async () => {
  try {
    const res = await axiosClient("contract/get-employee-contracts", {
      params: {
        employee_id: store.getState().auth.id,
      },
      headers: {
        Authorization: `Bearer ${store.getState().auth.token}`,
      },
    });

    return res.data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

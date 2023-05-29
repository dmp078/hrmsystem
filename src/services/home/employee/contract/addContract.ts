import { axiosClient } from "../../../../configs/api";
import { store } from "../../../../redux/store";

export const addContract = async (file: any, date: string, name: string) => {
  try {
    const formData = new FormData();
    formData.append("documents[]", file);
    formData.append("names[]", name);
    formData.append("contract_dates[]", date);
    formData.append("employee_id", store.getState().auth.id?.toString() || "");
    await axiosClient.post("contract/save-multiple", formData, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

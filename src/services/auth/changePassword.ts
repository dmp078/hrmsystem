import { axiosClient } from "../../configs/api";
import { IchangePasswordParams } from "../../models/auth/changePassword";
import { store } from "../../redux/store";
import { onLogout } from "./logout";

export const changePassword = async (values: IchangePasswordParams) => {
  try {
    await axiosClient.post(
      "change-password",
      {
        token: `Bearer ${store.getState().auth.token}`,
        password: values.password,
        password_confirmation: values.confirmPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${store.getState().auth.token}`,
        },
      }
    );

    onLogout();
  } catch (er) {
    Promise.reject(er);
  }
};

import { axiosClient } from "../../configs/api";
import { ROUTES } from "../../configs/routes/ROUTES";
import { IresetPasswordParams } from "../../models/auth/resetPassword";
import { store } from "../../redux/store";
import { onLogout } from "./logout";

export const resetPassword = async (values: IresetPasswordParams) => {
  try {
    await axiosClient.post(
      ROUTES.resetPassword,
      {
        token: values.token,
        email: values.email,
        company_id: values.company_id,
        password: values.password,
        password_confirmation: values.confirmPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${values.token}`,
        },
      }
    );

    onLogout();
  } catch (er) {
    Promise.reject(er);
  }
};

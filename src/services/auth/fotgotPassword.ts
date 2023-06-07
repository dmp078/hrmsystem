import { axiosClient } from "../../configs/api";
import { ROUTES } from "../../configs/routes/ROUTES";
import { IforgotPasswordParams } from "../../models/auth/forgotPasswordAuth";
import { store } from "../../redux/store";

export const forgotPassword = async (values: IforgotPasswordParams) => {
  try {
    await axiosClient.post(
      ROUTES.forgotPassword,
      {
        email: values.email,
      },
      {
        headers: {
          Authorization: `Bearer ${store.getState().auth.token}`,
        },
      }
    );
  } catch (er: any) {
    throw new Error(er.response.data.message);
  }
};

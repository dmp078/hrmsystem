import { axiosClient } from "../../configs/api";
import { RESPONSE_SUCCESS } from "../../configs/responses-code";
import { ROUTES } from "../../configs/routes/ROUTES";
import { IloginParams } from "../../models/auth/loginAuth";
import { store } from "../../redux/store";
import { AUTH_ACTIONS } from "../../screens/auth/redux/actions";

export const onLogin = async (values: IloginParams) => {
  try {
    const res = await axiosClient.post("/login", values);

    if (res.status === RESPONSE_SUCCESS) {
      store.dispatch({ type: AUTH_ACTIONS.SET_AUTH, payload: res.data.data });
      window.location.replace(ROUTES.home);
      return;
    }
  } catch (er) {
    console.log(er);
  }
};

import { axiosClient } from "../../configs/api";
import { ROUTES } from "../../configs/routes/ROUTES";
import { IloginParams } from "../../models/auth/loginAuth";
import { store } from "../../redux/store";
import { AUTH_ACTIONS } from "../../redux/actions/auth/actions";
import { getDetail } from "./getDetail";

export const onLogin = async (values: IloginParams) => {
  try {
    const res = await axiosClient.post(ROUTES.login, values);
    store.dispatch({ type: AUTH_ACTIONS.SET_AUTH, payload: res.data.data });

    await getDetail();
    window.location.replace(ROUTES.home);
  } catch (er) {
    return Promise.reject(er);
  }
};

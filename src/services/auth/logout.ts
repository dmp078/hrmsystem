import { ROUTES } from "../../configs/routes/ROUTES";
import { store } from "../../redux/store";
import { AUTH_ACTIONS } from "../../redux/actions/auth/actions";
import { initValueAuth } from "../../redux/reducer/auth/reducer";

export const onLogout = async () => {
  store.dispatch({ type: AUTH_ACTIONS.REMOVE_AUTH, payload: initValueAuth });
  window.location.replace(ROUTES.auth + "/" + ROUTES.login);
};

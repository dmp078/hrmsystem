import { ROUTES } from "../../configs/routes/ROUTES";
import { store } from "../../redux/store";
import { AUTH_ACTIONS } from "../../screens/auth/redux/actions";
import { initValueAuth } from "../../screens/auth/redux/reducer";

export const onLogout = async () => {
  store.dispatch({ type: AUTH_ACTIONS.REMOVE_AUTH, payload: initValueAuth });
  window.location.replace(ROUTES.auth + "/" + ROUTES.login);
};

import { IauthState } from "../../../models/reducer/reducerAuth";
import { AUTH_ACTIONS } from "../../actions/auth/actions";

export const initValueAuth: IauthState = {
  token: null,
  username: null,
  department: null,
  email: null,
  id: null,
};

interface IactionAuth {
  type: string;
  payload: IauthState;
}

export const reducerAuth = (state: IauthState = initValueAuth, action: IactionAuth) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_AUTH:
      return { ...state, ...action.payload };
    case AUTH_ACTIONS.REMOVE_AUTH:
      return { ...state, ...initValueAuth };
    default:
      return { ...state };
  }
};

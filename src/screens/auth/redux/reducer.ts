import { IauthState } from "../../../models/auth/reducerAuth";
import { AUTH_ACTIONS } from "./actions";

export const initValueAuth: IauthState = {
  token: null,
};

interface IactionAuth {
  type: string;
  payload: IauthState;
}

export const reducerAuth = (
  state: IauthState = initValueAuth,
  action: IactionAuth
) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_AUTH:
      return { ...state, ...action.payload };
    case AUTH_ACTIONS.REMOVE_AUTH:
      return { ...state, ...initValueAuth };
    default:
      return { ...state };
  }
};

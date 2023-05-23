import { axiosClient } from "../../configs/api";
import { RESPONSE_SUCCESS } from "../../configs/responses-code";
import { IloginParams } from "../../models/auth/loginAuth";
import { AUTH_ACTIONS } from "../../screens/auth/redux/actions";

export const loginThunkCreator = (values: IloginParams) => {
  return async function fetchTodoByIdThunk(dispatch: any) {
    const res = await axiosClient.post("/login", values);

    if (res.status === RESPONSE_SUCCESS) {
      dispatch({ type: AUTH_ACTIONS.SET_AUTH, payload: res.data.data });
    }
  };
};

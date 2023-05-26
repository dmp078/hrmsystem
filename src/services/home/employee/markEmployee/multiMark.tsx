import { EMPLOYEE_ACTIONS } from "../../../../redux/actions/home/actions";
import { store } from "../../../../redux/store";

export const multiMark = (payload: Array<number>) => {
  store.dispatch({
    type: EMPLOYEE_ACTIONS.MULTI_MARKED_DELETE,
    payload: payload,
  });
};

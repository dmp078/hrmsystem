import { EMPLOYEE_ACTIONS } from "../../../../redux/actions/home/actions";
import { store } from "../../../../redux/store";

export const multiClearMark = (payload: Array<number>) => {
  store.dispatch({
    type: EMPLOYEE_ACTIONS.MULTI_CLEAR_MARKED_DELETE,
    payload: payload,
  });
};

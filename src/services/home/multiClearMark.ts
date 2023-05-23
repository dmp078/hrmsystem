import { store } from "../../redux/store";
import { EMPLOYEE_ACTIONS } from "../../screens/home/components/employee/redux/actions";

export const multiClearMark = (payload: Array<number>) => {
  store.dispatch({
    type: EMPLOYEE_ACTIONS.MULTI_CLEAR_MARKED_DELETE,
    payload: payload,
  });
};

import { store } from "../../redux/store";
import { EMPLOYEE_ACTIONS } from "../../screens/home/components/employee/redux/actions";

export const multiMark = (payload: Array<number>) => {
  store.dispatch({
    type: EMPLOYEE_ACTIONS.MULTI_MARKED_DELETE,
    payload: payload,
  });
};

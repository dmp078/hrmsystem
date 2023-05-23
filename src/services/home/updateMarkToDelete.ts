import { store } from "../../redux/store";
import { EMPLOYEE_ACTIONS } from "../../screens/home/components/employee/redux/actions";

export const updateMarkToDelete = (id: number) => {
  store.dispatch({ type: EMPLOYEE_ACTIONS.UPDATE_MARKED_DELETE, payload: id });
};

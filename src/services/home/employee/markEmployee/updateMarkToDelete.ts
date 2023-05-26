import { EMPLOYEE_ACTIONS } from "../../../../redux/actions/home/actions";
import { store } from "../../../../redux/store";

export const updateMarkToDelete = (id: number) => {
  store.dispatch({ type: EMPLOYEE_ACTIONS.UPDATE_MARKED_DELETE, payload: id });
};

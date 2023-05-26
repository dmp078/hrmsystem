import { axiosClient } from "../../../configs/api";
import { ROUTES } from "../../../configs/routes/ROUTES";
import { EMPLOYEE_ACTIONS } from "../../../redux/actions/home/actions";
import { store } from "../../../redux/store";

export const multiDeleteEmployee = async () => {
  try {
    await axiosClient.delete(ROUTES.employee + "/multiple-delete", {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
      params: {
        record_ids: store.getState().employee.markedDelete,
      },
    });

    store.dispatch({ type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE, payload: {} });
  } catch (er) {
    console.log(er);
  }
};

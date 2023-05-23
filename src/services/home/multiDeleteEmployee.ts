import { axiosClient } from "../../configs/api";
import { RESPONSE_SUCCESS } from "../../configs/responses-code";
import { ROUTES } from "../../configs/routes/ROUTES";
import { store } from "../../redux/store";
import { EMPLOYEE_ACTIONS } from "../../screens/home/components/employee/redux/actions";

export const multiDeleteEmployee = async () => {
  try {
    const res = await axiosClient.delete(ROUTES.employee + "/multiple-delete", {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
      params: {
        record_ids: store.getState().employee.markedDelete,
      },
    });

    if (res.status == RESPONSE_SUCCESS) {
      store.dispatch({ type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE, payload: {} });

      return res.data;
    }
  } catch (er) {
    console.log(er);
  }
};

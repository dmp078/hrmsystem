import { axiosPrivate } from "../../../configs/api";
import { ROUTES } from "../../../configs/routes/ROUTES";
import { EMPLOYEE_ACTIONS } from "../../../redux/actions/home/actions";
import { store } from "../../../redux/store";

export const getEmployee = async (pageNumber: number) => {
  try {
    const res = await axiosPrivate(ROUTES.employee, {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
      params: {
        page: pageNumber,
      },
    });

    store.dispatch({
      type: EMPLOYEE_ACTIONS.SET_EMPLOYEE,
      payload: res,
    });

    return res;
  } catch (er) {
    console.log(er);
  }
};

import { axiosClient } from "../../configs/api";
import { RESPONSE_SUCCESS } from "../../configs/responses-code";
import { ROUTES } from "../../configs/routes/ROUTES";
import { store } from "../../redux/store";
import { EMPLOYEE_ACTIONS } from "../../screens/home/components/employee/redux/actions";

export const getEmployee = async (pageNumber: number) => {
  try {
    const res = await axiosClient(ROUTES.employee, {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
      params: {
        page: pageNumber,
      },
    });

    if (res.status == RESPONSE_SUCCESS) {
      // convert gender to value

      let dataCurrentPage = res.data.data;
      dataCurrentPage.data = dataCurrentPage.data.map((item: any) => {
        return { ...item, gender: item.gender ? "male" : "female" };
      });

      store.dispatch({
        type: EMPLOYEE_ACTIONS.SET_EMPLOYEE,
        payload: dataCurrentPage,
      });

      return dataCurrentPage;
    }
  } catch (er) {
    console.log(er);
  }
};

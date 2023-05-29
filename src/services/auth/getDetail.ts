import { axiosClient } from "../../configs/api";
import { AUTH_ACTIONS } from "../../redux/actions/auth/actions";
import { store } from "../../redux/store";

export const getDetail = async () => {
  try {
    const res = await axiosClient("user/detail", {
      headers: {
        Authorization: `Bearer ${store.getState().auth.token}`,
      },
    });

    store.dispatch({
      type: AUTH_ACTIONS.SET_AUTH,
      payload: {
        token: store.getState().auth.token,
        email: res.data.data.email,
        username: res.data.data.username,
        department: res.data.data.department.name,
        id: res.data.data.id,
      },
    });
  } catch (er) {
    console.log(er);
  }
};

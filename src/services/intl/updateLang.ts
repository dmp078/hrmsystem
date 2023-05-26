import { INTL_ACTIONS } from "../../redux/actions/intl/actions";
import { store } from "../../redux/store";

export const updateLang = (language: string) => {
  store.dispatch({ type: INTL_ACTIONS.SET_LANG, payload: language });
};

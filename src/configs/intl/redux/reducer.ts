import { IactionCommon } from "../../../commons/models/action";
import { IintlState } from "../../../models/intl/reducerIntl";
import { INTL_ACTIONS } from "./actions";

export const reducerIntl = (
  state: IintlState = { lang: "en" },
  action: IactionCommon
) => {
  switch (action.type) {
    case INTL_ACTIONS.SET_LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};

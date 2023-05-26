import { combineReducers } from "redux";
import { reducerIntl } from "../intl/reducer";
import { reducerAuth } from "../auth/reducer";
import persistReducer from "redux-persist/es/persistReducer";
import { authConfigPersist } from "../../../configs/persist/authConfig";
import { intlConfigPersist } from "../../../configs/persist/intlConfig";
import { reducerEmployee } from "../home/reducer";

export const rootReducer = combineReducers({
  intl: persistReducer(intlConfigPersist, reducerIntl),
  auth: persistReducer(authConfigPersist, reducerAuth),
  employee: reducerEmployee,
});

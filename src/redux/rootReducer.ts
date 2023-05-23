import { combineReducers } from "redux";
import { reducerIntl } from "../configs/intl/redux/reducer";
import { reducerAuth } from "../screens/auth/redux/reducer";
import persistReducer from "redux-persist/es/persistReducer";
import { authConfigPersist } from "../configs/persist/authConfig";
import { intlConfigPersist } from "../configs/persist/intlConfig";
import { reducerEmployee } from "../screens/home/components/employee/redux/reducer";

export const rootReducer = combineReducers({
  intl: persistReducer(intlConfigPersist, reducerIntl),
  auth: persistReducer(authConfigPersist, reducerAuth),
  employee: reducerEmployee,
});

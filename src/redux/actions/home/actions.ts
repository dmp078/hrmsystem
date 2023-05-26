import { IcaseActions } from "../../../models/reducer/employeeReducer";

export const EMPLOYEE_ACTIONS: IcaseActions = {
  SET_EMPLOYEE: "employee/set-employee",
  DELETE_EMPLOYEE: "employee/delete-employee",
  UPDATE_MARKED_DELETE: "employee/update_marked_delete",
  MULTI_MARKED_DELETE: "employee/multi_marked_delete",
  MULTI_CLEAR_MARKED_DELETE: "employee/multi_clear_marked_delete",
};

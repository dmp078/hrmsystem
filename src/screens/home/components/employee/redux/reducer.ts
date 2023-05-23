import { IemployeeState } from "../../../../../models/home/employeeReducer";
import { EMPLOYEE_ACTIONS } from "./actions";

interface IactionEmployee {
  type: string;
  payload: any;
}

const initValue: IemployeeState = { markedDelete: [], dataResponse: [] };

export const reducerEmployee = (
  state: IemployeeState = initValue,
  action: IactionEmployee
) => {
  switch (action.type) {
    case EMPLOYEE_ACTIONS.SET_EMPLOYEE:
      // payload: object data from api
      return {
        ...state,
        dataResponse: [...state.dataResponse, action.payload],
      };
    case EMPLOYEE_ACTIONS.UPDATE_MARKED_DELETE:
      // payload: id
      return {
        ...state,
        // If exist => remove, else : add
        markedDelete: state.markedDelete.includes(action.payload)
          ? state.markedDelete.filter((item) => item != action.payload)
          : [...state.markedDelete, action.payload],
      };
    case EMPLOYEE_ACTIONS.MULTI_MARKED_DELETE:
      // payload: id[]
      return {
        ...state,
        markedDelete: [
          ...state.markedDelete,
          ...action.payload.filter(
            (item: any) => !state.markedDelete.includes(item)
          ),
        ],
      };

    case EMPLOYEE_ACTIONS.MULTI_CLEAR_MARKED_DELETE:
      // payload : id[]
      return {
        ...state,
        markedDelete: [
          ...state.markedDelete.filter(
            (item: any) => !action.payload.includes(item)
          ),
        ],
      };

    case EMPLOYEE_ACTIONS.DELETE_EMPLOYEE:
      return { ...state, ...initValue };
    default:
      return state;
  }
};

export interface IemployeeState {
  markedDelete: Array<number>;
  dataResponse: Array<any>;
}

export interface IcaseActions {
  SET_EMPLOYEE: string;
  DELETE_EMPLOYEE: string;
  UPDATE_MARKED_DELETE: string;
  MULTI_MARKED_DELETE: string;
  MULTI_CLEAR_MARKED_DELETE: string;
}

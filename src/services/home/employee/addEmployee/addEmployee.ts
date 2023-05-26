import { axiosClient } from "../../../../configs/api";
import {
  IcontractInformationParams,
  IemployeeInformationParams,
  IemploymentDetailsParams,
  IothersParams,
  IsalaryWagesParams,
} from "../../../../models/home/employeeAddParams";
import { store } from "../../../../redux/store";

export const addEmployee = async (
  eInfor: IemployeeInformationParams,
  contractInfor: IcontractInformationParams,
  eDetail: IemploymentDetailsParams,
  salary: IsalaryWagesParams,
  others: IothersParams
) => {
  try {
    await axiosClient.post(
      "employee",
      {
        ...eInfor,
        ...contractInfor,
        ...eDetail,
        ...salary,
        ...others,
      },
      {
        headers: {
          Authorization: `Bearer ${store.getState().auth.token}`,
          Accept: "application/json",
        },
      }
    );
  } catch (er) {
    Promise.reject(er);
  }
};

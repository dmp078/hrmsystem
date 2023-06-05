import React, { useCallback, useEffect, useState } from "react";
import { Outlet, createSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, store } from "../../../../../redux/store";
import { getEmployee } from "../../../../../services/home/employee/getEmployee";
import { multiMark } from "../../../../../services/home/employee/markEmployee/multiMark";
import { multiClearMark } from "../../../../../services/home/employee/markEmployee/multiClearMark";
import { multiDeleteEmployee } from "../../../../../services/home/employee/multiDeleteEmployee";
import {
  IcontractInformationParams,
  IemployeeInformationParams,
  IemploymentDetailsParams,
  IothersParams,
  IsalaryWagesParams,
} from "../../../../../models/home/employeeAddParams";
import { addEmployee } from "../../../../../services/home/employee/addEmployee/addEmployee";

const EmployeePage = () => {
  const query = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(query.get("page") ? Number(query.get("page")) : 1);
  const listMarkedDelete = useSelector((state: RootState) => state.employee.markedDelete);
  const [loading, setLoading] = useState<boolean>(false);
  const [table, setTable] = useState<any>({});
  const [showModal, setShowModal] = useState<boolean>(false);

  const resetTable = () => {
    // neu du lieu trang da load 1 lan tu truoc thi khong call api nua
    const dataCurrentPage = store.getState().employee.dataResponse.filter((item: any) => item.current_page == page);

    if (dataCurrentPage.length) {
      setTable(dataCurrentPage[0]);
    } else {
      const callGetEmployee = async (page: number) => {
        setLoading(true);
        const res = await getEmployee(page);
        setLoading(false);
        return res;
      };

      callGetEmployee(page).then((res) => setTable(res));
    }
  };

  const updatePage = (nextPage: number) => {
    const params = { page: nextPage.toString() };

    navigate({
      pathname: "",
      search: `?${createSearchParams(params)}`,
    });

    setPage(nextPage);
  };

  const handleMultiUpdateMark = (e: any) => {
    if (e.target.checked) multiMark(table?.data?.map((item: any) => item.id));
    else multiClearMark(table?.data?.map((item: any) => item.id));
  };

  const handleClickDelete = async () => {
    toggleShowModal(false);
    setLoading(true);

    await multiDeleteEmployee();
    resetTable();

    setLoading(false);
  };

  const toggleShowModal = (value: boolean) => {
    setShowModal(value);
  };

  const callAddEmployee = async (
    employeeInformation: IemployeeInformationParams,
    contractInformation: IcontractInformationParams,
    employmentDetails: IemploymentDetailsParams,
    salaryWages: IsalaryWagesParams,
    others: IothersParams
  ) => {
    // convert to Array<[key, value]>
    const eInforFilter = Object.entries(employeeInformation).filter((item: any) => item[1] !== -1 && item[1] !== "");
    // convert to object
    const eInforDataToPass = Object.fromEntries(eInforFilter);

    const eDetailFilter = Object.entries(employmentDetails).filter((item: any) => item[1] !== -1 && item[1] !== "");
    const eDetailDataToPass = Object.fromEntries(eDetailFilter);

    const othersFilter = Object.entries(others).filter((item: any) => item[1] !== -1 && item[1] !== "");
    const othersDataToPass = Object.fromEntries(othersFilter);

    if (others.benefits.length) Object.assign(othersDataToPass, { benefits: [...others.benefits] });

    return new Promise(async (resolve) => {
      await addEmployee(
        eInforDataToPass as any,
        contractInformation,
        eDetailDataToPass as any,
        salaryWages,
        othersDataToPass as any
      );
      resolve("Done");
      resetTable();
    });
  };

  useEffect(resetTable, [page]);

  return (
    <div className="pt-8">
      <Outlet
        context={[
          {
            table,
            loading,
            updatePage,
            listMarkedDelete,
            handleMultiUpdateMark,
            handleClickDelete,
            showModal,
            toggleShowModal,
            callAddEmployee,
          },
        ]}
      />
    </div>
  );
};

export default EmployeePage;

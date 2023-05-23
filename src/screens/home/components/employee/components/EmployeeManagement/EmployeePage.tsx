import React, { useEffect, useState } from "react";
import { Outlet, createSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, store } from "../../../../../../redux/store";
import { getEmployee } from "../../../../../../services/home/getEmployee";
import { multiMark } from "../../../../../../services/home/multiMark";
import { multiClearMark } from "../../../../../../services/home/multiClearMark";
import { multiDeleteEmployee } from "../../../../../../services/home/multiDeleteEmployee";

const EmployeePage = () => {
  const query = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(
    query.get("page") ? Number(query.get("page")) : 1
  );
  const listMarkedDelete = useSelector(
    (state: RootState) => state.employee.markedDelete
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [table, setTable] = useState<any>({});
  const [showModal, setShowModal] = useState<boolean>(false);

  const resetTable = () => {
    const dataCurrentPage = store
      .getState()
      .employee.dataResponse.filter((item: any) => item.current_page == page);

    if (dataCurrentPage.length) {
      setTable(dataCurrentPage[0]);
    } else {
      const callGetEmployee = async (page: number) => {
        setLoading(true);
        const res = await getEmployee(page);
        setLoading(false);
        return res;
      };

      try {
        callGetEmployee(page).then((res) => setTable(res));
      } catch (er) {
        console.log(er);
      }
    }
  };
  useEffect(resetTable, [page]);

  const updatePage = (nextPage: number) => {
    const params = { page: nextPage.toString() };

    navigate({
      pathname: "",
      search: `?${createSearchParams(params)}`,
    });

    setPage(nextPage);
  };

  const handleMultiUpdateMark = (e: any) => {
    if (e.target.checked) multiMark(table.data.map((item: any) => item.id));
    else multiClearMark(table.data.map((item: any) => item.id));
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

  return (
    <div className="pt-8 w-2/3">
      <Outlet
        context={[
          table,
          loading,
          updatePage,
          listMarkedDelete,
          handleMultiUpdateMark,
          handleClickDelete,
          showModal,
          toggleShowModal,
        ]}
      />
    </div>
  );
};

export default EmployeePage;

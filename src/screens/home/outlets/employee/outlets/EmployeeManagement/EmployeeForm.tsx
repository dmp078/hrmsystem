import React from "react";
import { FormattedMessage } from "react-intl";
import { Link, useOutletContext } from "react-router-dom";
import { ROUTES } from "../../../../../../configs/routes/ROUTES";
import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSearch } from "@fortawesome/free-solid-svg-icons";
import { listHeaderEmployee } from "../../../../../../assets/constants/listHeaderEmployee";
import { updateMarkToDelete } from "../../../../../../services/home/employee/markEmployee/updateMarkToDelete";

const EmployeeForm = () => {
  const [
    table,
    loading,
    updatePage,
    listMarkedDelete,
    handleMultiUpdateMark,
    handleClickDelete,
    showModal,
    toggleShowModal,
  ]: Array<any> = useOutletContext();

  return (
    <div className="w-[45vw] lg:w-[65vw] overflow-x-scroll">
      <div className="flex gap-2 text-sm ">
        <a href={ROUTES.home} className="no-underline text-black">
          <FormattedMessage id="home.general" />
        </a>
        <p>{">"}</p>
        <div className="font-semibold">
          <FormattedMessage id="home.employee" />
        </div>
      </div>

      <div className="text-3xl font-semibold flex w-full justify-between">
        <div className="w-full">
          <FormattedMessage id="home.employee" />
        </div>
        <div className="w-30">
          <InputGroup className="w-full">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
          </InputGroup>
        </div>
      </div>

      <div className="relative bg-white rounded-lg p-4 mt-4 shadow-sm overflow-auto">
        <div className="flex float-right gap-2">
          <Link to={ROUTES.add + "/" + ROUTES.employeeInfor}>
            <Button
              variant=""
              style={{
                color: "#0091FF",
                backgroundColor: "#EDF6FF",
                border: "none",
              }}
            >
              <FormattedMessage id="add" />
            </Button>
          </Link>

          <Button
            disabled={listMarkedDelete.length ? false : true}
            onClick={() => toggleShowModal(true)}
            style={{
              color: `${listMarkedDelete.length ? "#E5484D" : "white"}`,
              backgroundColor: ` ${listMarkedDelete.length ? "#FFEFEF" : "gray"}`,
              border: "none",
            }}
          >
            <FormattedMessage id="delete" />
          </Button>
        </div>

        <div className="w-fit h-fit my-auto">
          <Modal show={showModal} style={{ margin: "auto" }}>
            <Modal.Body style={{ margin: "auto" }}>
              <FormattedMessage id="employee.confirm.delete" />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => toggleShowModal(false)} variant="secondary">
                {<FormattedMessage id="no" />}
              </Button>
              <Button onClick={handleClickDelete} variant="primary">
                {<FormattedMessage id="yes" />}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className=" h-[1px] w-full bg-slate-300 mt-12 "></div>
        <div className=" text-sm rounded-2xl h-[600px] bg-[#FBFCFD] my-2 overflow-x-scroll">
          <div hidden={loading ? false : true} className="absolute inset-0 bg-black/[.1] flex z-10 ">
            <Spinner className="m-auto w-5 h-5 text-black/[.6]" />
          </div>

          <table
            style={{
              borderCollapse: "separate",
            }}
            className="min-w-max"
          >
            <tbody className="w-full">
              <tr className="w-full mx-2 relative h-full bg-[#F8F9FA] brightness-90">
                <th>
                  <input
                    onClick={handleMultiUpdateMark}
                    // checked={listHeaderEmployee.length ? true : false}
                    type="checkbox"
                    className="mt-[10px] mx-3 h-5"
                  />
                </th>

                {listHeaderEmployee.map((item, id) => (
                  <th
                    className="brightness-90 w-fit px-4"
                    style={{
                      padding: "6px 0",
                      backgroundColor: "#F8F9FA",
                    }}
                    key={id}
                  >
                    <FormattedMessage id={`employee.${item}`} />
                  </th>
                ))}
              </tr>

              {table?.data?.map((it: any, index: any) => (
                <tr
                  onClick={() => updateMarkToDelete(it.id)}
                  key={index}
                  className="w-full cursor-pointer hover:brightness-90"
                >
                  <td>
                    {listMarkedDelete.includes(it.id) ? (
                      <div className="text-center mt-2">
                        <FontAwesomeIcon className="text-green-600 mx-auto h-5" icon={faCheckSquare} />
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-sm border-2 border-black/[.3] mx-auto mt-[12px]"></div>
                    )}
                  </td>
                  {listHeaderEmployee.map((item, id) => (
                    <td
                      style={{
                        padding: "6px 0",
                        backgroundColor: "#F8F9FA",
                      }}
                      className=""
                      key={id}
                    >
                      {item == "gender" ? <FormattedMessage id={it[item]} /> : it[item]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" h-[1px] w-full bg-slate-300"></div>
        <div className="flex gap-1 mt-4">
          <button
            onClick={() => updatePage(1)}
            disabled={table?.current_page == 1}
            className="px-3 py-2 bg-white rounded-lg"
          >
            {"<<"}
          </button>
          <button
            onClick={() => updatePage(table?.current_page - 1)}
            disabled={table?.current_page == 1}
            className="px-3 py-2 bg-white rounded-lg"
          >
            {"<"}
          </button>

          {table?.current_page + 2 >= table?.last_page && (
            <div className="flex gap-1">
              <button
                onClick={() => updatePage(1)}
                className={`px-3 py-2 bg-[#F1F3F5] ${1 == table?.current_page ? "brightness-75" : ""} rounded-lg`}
              >
                1
              </button>
              {table?.last_page - 3 > 1 && <div className="mt-3 mx-2">...</div>}
              {table?.last_page - 2 > 1 && (
                <button
                  onClick={() => updatePage(table?.last_page - 2)}
                  className={`px-3 py-2 bg-[#F1F3F5] ${
                    table?.last_page - 2 == table?.current_page ? "brightness-75" : ""
                  } rounded-lg`}
                >
                  {table?.last_page - 2}
                </button>
              )}
              {table?.last_page - 1 > 1 && (
                <button
                  onClick={() => updatePage(table?.last_page - 1)}
                  className={`px-3 py-2 bg-[#F1F3F5] ${
                    table?.last_page - 1 == table?.current_page ? "brightness-75" : ""
                  } rounded-lg`}
                >
                  {table?.last_page - 1}
                </button>
              )}

              {table?.last_page > 1 && (
                <button
                  onClick={() => updatePage(table?.last_page)}
                  className={`px-3 py-2 bg-[#F1F3F5] ${
                    table?.last_page == table?.current_page ? "brightness-75" : ""
                  } rounded-lg`}
                >
                  {table?.last_page}
                </button>
              )}
            </div>
          )}

          {table?.current_page + 2 < table?.last_page && (
            <div className="flex gap-1">
              <button className={`px-3 py-2 bg-[#F1F3F5] brightness-75 rounded-lg`}>{table?.current_page}</button>
              <button
                onClick={() => updatePage(table?.current_page + 1)}
                className={`px-3 py-2 bg-[#F1F3F5]  rounded-lg`}
              >
                {table?.current_page + 1}
              </button>
              <button
                onClick={() => updatePage(table?.current_page + 2)}
                className={`px-3 py-2 bg-[#F1F3F5] rounded-lg`}
              >
                {table?.current_page + 2}
              </button>

              {table?.current_page + 3 < table?.last_page && <div className="mx-2 mt-4">...</div>}
              <button onClick={() => updatePage(table?.last_page)} className={`px-3 py-2 bg-[#F1F3F5] rounded-lg`}>
                {table?.last_page}
              </button>
            </div>
          )}

          <button
            onClick={() => updatePage(table?.current_page + 1)}
            disabled={table?.current_page == table?.last_page}
            className="px-3 py-2 bg-white rounded-lg"
          >
            {">"}
          </button>
          <button
            onClick={() => updatePage(table?.last_page)}
            disabled={table?.current_page == table?.last_page}
            className="px-3 py-2 bg-white rounded-lg"
          >
            {">>"}
          </button>
          <div className="px-3 py-2 bg-[#F1F3F5] rounded-lg">{`${table?.from} - ${table?.to} of ${table?.total}`}</div>
        </div>
      </div>

      <div className="mt-3 text-center text-sm">Copyright © 2022. All Rights Reserved</div>
    </div>
  );
};

export default EmployeeForm;

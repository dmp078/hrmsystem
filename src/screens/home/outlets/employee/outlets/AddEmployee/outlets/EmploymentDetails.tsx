import React from "react";
import { FormattedMessage } from "react-intl";
import { useOutletContext } from "react-router-dom";
import TitleInputForm from "../../../../../../../commons/components/TitleInputForm";
import { Dropdown } from "react-bootstrap";

const EmploymentDetails = () => {
  const [props]: Array<any> = useOutletContext();

  return (
    <div className="p-4 bg-[#FBFCFD] rounded-lg my-6">
      <div className=" flex justify-between text-xl font-semibold">
        <FormattedMessage id="add.employment.details" />
        <div className="flex text-sm required">
          <FormattedMessage id="required" />
        </div>
      </div>

      <div className=" h-[1px] w-full bg-slate-300 mt-2"></div>

      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "6px",
        }}
        className="mt-3"
      >
        <tbody>
          <tr>
            <TitleInputForm title="add.department" required={false} />
            <td className="w-72">
              <Dropdown>
                <Dropdown.Toggle
                  className="w-full drop-down-factory py-2 inline-block"
                  style={{ backgroundColor: "#F1F3F5", outline: "none" }}
                  variant=""
                >
                  <div className="mx-auto text-center my-auto inline-block">
                    {props.listDepartment?.filter(
                      (department: any) => department.id == props.employmentDetails.department_id
                    )[0]
                      ? props.listDepartment?.filter(
                          (department: any) => department.id == props.employmentDetails.department_id
                        )[0]?.name
                      : "Select department"}
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="" className="w-full">
                  {props.listDepartment?.map((department: any, indx: any) => (
                    <Dropdown.Item
                      onClick={() => props.updateEmploymentDetails("department_id", department.id)}
                      key={indx}
                    >
                      {department.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td></td>
          </tr>

          <tr>
            <TitleInputForm title="add.position" required={false} />
            <td className="w-72">
              <Dropdown>
                <Dropdown.Toggle
                  className="w-full drop-down-factory py-2 inline-block"
                  style={{ backgroundColor: "#F1F3F5", outline: "none" }}
                  variant=""
                >
                  <div className="mx-auto text-center my-auto inline-block">
                    {props.listPosition?.filter((position: any) => position.id == props.employmentDetails.position_id)
                      .length
                      ? props.listPosition?.filter(
                          (position: any) => position.id == props.employmentDetails.position_id
                        )[0]?.name
                      : "Select position"}
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="" className="w-full">
                  {props.listPosition?.map((position: any, indx: any) => (
                    <Dropdown.Item onClick={() => props.updateEmploymentDetails("position_id", position.id)} key={indx}>
                      {position.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="pl-4 mt-6 flex flex-col gap-3">
        <label className="flex gap-3 cursor-pointer">
          <input
            checked={props.employmentDetails.entitle_ot === 1}
            onChange={(e) => props.updateEmploymentDetails("entitle_ot", e.target.checked ? 1 : 0)}
            type="checkbox"
          />
          <FormattedMessage id="add.entitled.ot" />
        </label>

        <label className="flex gap-3 cursor-pointer">
          <input
            checked={props.employmentDetails.meal_allowance_paid === 1}
            onChange={(e) => props.updateEmploymentDetails("meal_allowance_paid", e.target.checked ? 1 : 0)}
            type="checkbox"
          />
          <FormattedMessage id="add.meal_allowance.paid" />
        </label>

        <label className="flex gap-3 cursor-pointer">
          <input
            checked={props.employmentDetails.operational_allowance_paid === 1}
            onChange={(e) => props.updateEmploymentDetails("operational_allowance_paid", e.target.checked ? 1 : 0)}
            type="checkbox"
          />
          <FormattedMessage id="add.operational.allowance.paid" />
        </label>

        <label className="flex gap-3 cursor-pointer">
          <input
            checked={props.employmentDetails.attendance_allowance_paid === 1}
            onChange={(e) => props.updateEmploymentDetails("attendance_allowance_paid", e.target.checked ? 1 : 0)}
            type="checkbox"
          />
          <FormattedMessage id="add.attendance.allowance.paid" />
        </label>
      </div>
    </div>
  );
};

export default EmploymentDetails;

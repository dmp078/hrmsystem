import React from "react";
import { FormattedMessage } from "react-intl";
import { useOutletContext } from "react-router-dom";
import InputForm from "../../../../../../../commons/components/InputForm";
import TitleInputForm from "../../../../../../../commons/components/TitleInputForm";

const SalaryWages = () => {
  const [props]: Array<any> = useOutletContext();
  return (
    <div className="p-4 bg-[#FBFCFD] rounded-lg my-6">
      <div className=" flex justify-between text-xl font-semibold">
        <FormattedMessage id="add.salary.wages" />
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
            <TitleInputForm required title="add.basic.salary" />
            <InputForm
              tab={props.salaryWages}
              field="basic_salary"
              type="number"
              updateEmployeeInformation={props.updateSalaryWages}
            />
          </tr>

          <tr>
            <TitleInputForm required title="add.basic.salary.audit" />
            <InputForm
              tab={props.salaryWages}
              field="audit_salary"
              type="number"
              updateEmployeeInformation={props.updateSalaryWages}
            />
          </tr>

          <tr>
            <TitleInputForm required title="add.safety.insurance.amount" />
            <InputForm
              tab={props.salaryWages}
              field="safety_insurance"
              type="number"
              updateEmployeeInformation={props.updateSalaryWages}
            />
          </tr>

          <tr>
            <TitleInputForm required={false} title="add.healthy.insurance.amount" />
            <InputForm
              tab={props.salaryWages}
              field="health_insurance"
              type="number"
              updateEmployeeInformation={props.updateSalaryWages}
            />
          </tr>

          <tr>
            <TitleInputForm required title="add.meal.allowance" />
            <InputForm
              tab={props.salaryWages}
              field="meal_allowance"
              type="number"
              updateEmployeeInformation={props.updateSalaryWages}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalaryWages;

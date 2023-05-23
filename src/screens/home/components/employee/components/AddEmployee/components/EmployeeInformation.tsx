import React from "react";
import { FormattedMessage } from "react-intl";

const EmployeeInformation = () => {
  return (
    <div className="p-4 bg-[#FBFCFD] rounded-lg">
      <div className=" flex justify-between text-xl font-semibold">
        <FormattedMessage id="add.personal.information" />
        <div className="flex text-sm">
          <p className="font-semibold">
            <FormattedMessage id="required" />
          </p>
          <p className="text-red-600">*</p>
        </div>
      </div>

      <div className=" h-[1px] w-full bg-slate-300 mt-2"></div>
    </div>
  );
};

export default EmployeeInformation;

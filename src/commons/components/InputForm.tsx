import React, { memo } from "react";

interface Props {
  type: string;
  updateEmployeeInformation: (property: any, value: any) => void;
  field: string;
  tab: any;
}

const InputForm = (props: Props) => {
  const { type, updateEmployeeInformation, field, tab } = props;
  return (
    <td className="w-72 ">
      <input
        value={tab[field] == -1 ? "" : tab[field]}
        onChange={(e) => updateEmployeeInformation(field, e.target.value)}
        type={type}
        className="bg-[#F1F3F5] rounded-lg py-[10px] px-2 w-full outline-none"
      />
    </td>
  );
};

export default memo(InputForm);

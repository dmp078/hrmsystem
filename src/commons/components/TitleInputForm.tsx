import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

interface Props {
  title: string;
  required: boolean;
}

const TitleInputForm = (props: Props) => {
  const { title, required } = props;
  return (
    <td className={`pl-2 pr-4 ${required ? "required" : ""}`}>
      <FormattedMessage id={title} />
    </td>
  );
};

export default memo(TitleInputForm);

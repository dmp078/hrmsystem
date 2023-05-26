import React from "react";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const SettingsPage = () => {
  return (
    <div className="mt-10">
      <div className="font-semibold text-3xl">
        <FormattedMessage id="auth.change.password" />
      </div>
      <div className="mt-6 flex flex-col gap-6 bg-[#FFFFFF] rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <FormattedMessage id="auth.password" />
          <input type="text" className="py-3 pl-4 w-60 bg-[#F1F3F5] rounded-lg outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <FormattedMessage id="auth.confirm.password" />
          <input type="text" className="py-3 pl-4 w-60 bg-[#F1F3F5] rounded-lg outline-none" />
        </div>

        <Button variant="primary" className="py-2">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;

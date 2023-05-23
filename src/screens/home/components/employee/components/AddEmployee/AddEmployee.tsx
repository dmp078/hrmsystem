import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { ROUTES } from "../../../../../../configs/routes/ROUTES";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const AddEmployee = () => {
  const [path, setPath] = useState<string>(window.location.pathname);

  return (
    <div className="relative w-full min-w-[1000px]">
      <div className="flex gap-2 text-sm ">
        <a href={ROUTES.home} className="no-underline text-black">
          <FormattedMessage id="home.general" />
        </a>
        <p>{">"}</p>
        <Link
          to={"../../" + ROUTES.employee}
          className="no-underline text-black"
        >
          <FormattedMessage id="home.employee" />
        </Link>
        <p>{">"}</p>
        <div className="font-semibold">
          <FormattedMessage id="home.employee.add" />
        </div>
      </div>

      <div className="text-3xl font-semibold flex w-full justify-between">
        <div className="w-full">
          <FormattedMessage id="home.employee" />
        </div>
        <Button variant="primary">
          <FormattedMessage id="add" />
        </Button>
      </div>

      <div className="mt-10 flex gap-2">
        <Link
          to={ROUTES.employeeInfor}
          onClick={() => setPath(ROUTES.employeeInfor)}
          className={`${
            path.includes(ROUTES.employeeInfor)
              ? "text-white bg-[#0091FF]"
              : "text-[#0091FF] bg-[#E1F0FF]"
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.employee.information" />
        </Link>

        <Link
          to={ROUTES.contractInfor}
          onClick={() => setPath(ROUTES.contractInfor)}
          className={`${
            path.includes(ROUTES.contractInfor)
              ? "text-white bg-[#0091FF]"
              : "text-[#0091FF] bg-[#E1F0FF]"
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.contract.information" />
        </Link>

        <Link
          to={ROUTES.employmentDetails}
          onClick={() => setPath(ROUTES.employmentDetails)}
          className={`${
            path.includes(ROUTES.employmentDetails)
              ? "text-white bg-[#0091FF]"
              : "text-[#0091FF] bg-[#E1F0FF]"
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.employment.details" />
        </Link>

        <Link
          to={ROUTES.salaryWages}
          onClick={() => setPath(ROUTES.salaryWages)}
          className={`${
            path.includes(ROUTES.salaryWages)
              ? "text-white bg-[#0091FF]"
              : "text-[#0091FF] bg-[#E1F0FF]"
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.salary.wages" />
        </Link>

        <Link
          to={ROUTES.others}
          onClick={() => setPath(ROUTES.others)}
          className={`${
            path.includes(ROUTES.others)
              ? "text-white bg-[#0091FF]"
              : "text-[#0091FF] bg-[#E1F0FF]"
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.others" />
        </Link>
      </div>
      <div className="w-full mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AddEmployee;

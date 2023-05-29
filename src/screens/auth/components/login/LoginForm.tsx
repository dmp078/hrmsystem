import React, { memo } from "react";
import { logoHR } from "../../../../assets/images";
import { FormattedMessage } from "react-intl";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

import { ROUTES } from "../../../../configs/routes/ROUTES";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  companies: Array<any>;
  formik: any;
  handleChangeCompanyActive: (id: number) => void;
  companyActive: string | null;
  showToastEr: boolean;
  toggleToastEr: (payload: boolean) => void;
  loading: boolean;
  viewPassword: boolean;
  toggleViewPassword: () => void;
}

const LoginForm = (props: Props) => {
  const {
    companies,
    formik,
    handleChangeCompanyActive,
    companyActive,
    showToastEr,
    toggleToastEr,
    loading,
    viewPassword,
    toggleViewPassword,
  } = props;

  return (
    <div className="flex bg-[#F3F3F3] pb-6 relative">
      {showToastEr && (
        <div className="absolute top-6 right-6 py-3 px-4 gap-3 rounded-lg flex justify-between bg-red-600/[.2] text-red-600">
          <FormattedMessage id="auth.wrong.information" />
          <FontAwesomeIcon
            className="my-auto cursor-pointer"
            icon={faCircleXmark}
            onClick={() => toggleToastEr(false)}
          />
        </div>
      )}

      <div className="mx-auto mt-10">
        <img className="mx-auto" src={logoHR} alt="" />
        <div className="flex flex-col text-center font-semibold text-3xl">
          <div className="mt-4">
            <FormattedMessage id="auth.hr.management.system" />
          </div>
          <div className="mt-6">
            <FormattedMessage id="auth.signin" />
          </div>
        </div>

        {/* form login */}
        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="p-6 bg-[#FBFCFD] mt-6 rounded-xl flex flex-col gap-10"
        >
          <div className="flex flex-col gap-3 font-semibold">
            <div className="relative">
              <FormattedMessage id="auth.username" />
              <input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className={`${
                  formik.errors.username ? "bg-[#ff9494]/[.2] border-2 border-[#ff9494]/[.2]" : "bg-[#F1F3F5]"
                } w-full p-3 outline-none rounded-xl`}
              />
              {!!formik.errors.username && (
                <div className="text-red-500">
                  <FormattedMessage id={formik.errors.username} />
                </div>
              )}
            </div>

            <div className="relative">
              <FormattedMessage id="auth.password" />
              <div className="flex">
                <input
                  type={`${viewPassword ? "text" : "password"}`}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={`${
                    formik.errors.password ? "bg-[#ff9494]/[.2] border-2 border-[#ff9494]/[.2]" : "bg-[#F1F3F5]"
                  } w-full p-3 outline-none rounded-xl`}
                />
                {viewPassword && (
                  <FontAwesomeIcon
                    onClick={toggleViewPassword}
                    className="cursor-pointer absolute top-11 right-3"
                    icon={faEye}
                  />
                )}
                {!viewPassword && (
                  <FontAwesomeIcon
                    onClick={toggleViewPassword}
                    className="cursor-pointer absolute top-11 right-3"
                    icon={faEyeSlash}
                  />
                )}
              </div>

              {!!formik.errors.password && (
                <div className="text-red-500">
                  <FormattedMessage id={formik.errors.password} />
                </div>
              )}
            </div>

            <div>
              <FormattedMessage id="auth.factory" />

              <Dropdown>
                <Dropdown.Toggle
                  className="w-full drop-down-factory p-3 inline-block"
                  style={{ backgroundColor: "#F1F3F5", outline: "none" }}
                  variant=""
                >
                  {formik.values.company_id ? (
                    <label>{companyActive}</label>
                  ) : (
                    <FormattedMessage id="auth.select.factory" />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="" className="w-full">
                  {companies.map((company, index) => (
                    <Dropdown.Item
                      key={index}
                      style={{
                        color: `${company.name == companyActive ? "green" : ""}`,
                        backgroundColor: `${company.name == companyActive ? "rgba(0, 247, 91, 0.1)" : ""}`,
                      }}
                      onClick={() => handleChangeCompanyActive(company.id)}
                      className="py-3 w-full"
                    >
                      {company.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              {!!formik.errors.company_id && (
                <div className="text-red-500">
                  <FormattedMessage id={formik.errors.company_id} />
                </div>
              )}
            </div>
          </div>

          <Button disabled={loading ? true : false} type="submit" className="p-3">
            <Spinner hidden={loading ? false : true} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
            <FormattedMessage id="auth.signin" />
          </Button>
          <Link to={"../" + ROUTES.forgotPassword} className="text-[#0091FF] text-center no-underline">
            <FormattedMessage id="auth.forgot.password" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default memo(LoginForm);

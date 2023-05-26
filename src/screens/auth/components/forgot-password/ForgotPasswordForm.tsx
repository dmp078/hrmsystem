import React, { memo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IforgotPasswordParams } from "../../../../models/auth/forgotPasswordAuth";
import { logoHR } from "../../../../assets/images";
import { ROUTES } from "../../../../configs/routes/ROUTES";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  formik: any;
  showToast: boolean;
  toggleToast: (payload: boolean) => void;
}

const ForgotPasswordForm = (props: Props) => {
  const { formik, showToast, toggleToast } = props;

  return (
    <div className="flex bg-[#F3F3F3] relative">
      {showToast && (
        <div className="absolute top-6 right-6 py-3 px-4 gap-3 rounded-lg flex justify-between bg-red-600/[.2] text-red-600">
          <FormattedMessage id="auth.wrong.information" />
          <FontAwesomeIcon className="my-auto cursor-pointer" icon={faCircleXmark} onClick={() => toggleToast(false)} />
        </div>
      )}
      <div className="mx-auto mt-10">
        <img className="mx-auto" src={logoHR} alt="" />
        <div className="flex flex-col text-center font-semibold text-3xl">
          <div className="mt-4">
            <FormattedMessage id="auth.hr.management.system" />
          </div>
        </div>

        {/* form login */}
        <form onSubmit={formik.handleSubmit} action="" className="p-6 bg-[#FBFCFD] mt-6 rounded-xl flex flex-col gap-6">
          <div className="flex flex-col gap-2 font-semibold">
            <FormattedMessage id="auth.email" />
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`${
                formik.errors.email ? "bg-[#ff9494]/[.2] border-2 border-[#ff9494]/[.2]" : "bg-[#F1F3F5]"
              } w-full p-3 outline-none rounded-xl`}
            />
            {!!formik.errors.email && (
              <div className="text-red-500">
                <FormattedMessage id={formik.errors.email} />
              </div>
            )}
          </div>

          <Button type="submit" className="p-3">
            <FormattedMessage id="auth.confirm.send.otp" />
          </Button>
          <Link to={"../" + ROUTES.login} className="text-[#0091FF] text-center no-underline">
            <FormattedMessage id="auth.back.to.signin" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default memo(ForgotPasswordForm);

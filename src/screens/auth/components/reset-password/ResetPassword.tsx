import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { logoHR } from "../../../../assets/images";
import * as Yup from "yup";
import { useFormik } from "formik";
import { resetPassword } from "../../../../services/auth/resetPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const query = new URLSearchParams(window.location.search);

  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [er, setEr] = useState<string>("");

  const location = useLocation;
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().min(8, "auth.password.min").max(16, "auth.password.max"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password")], "auth.confirm.password.matched"),
    }),
    onSubmit: async (values: any) => {
      setLoading(true);
      try {
        await resetPassword({
          ...values,
          token: query.get("token"),
          company_id: query.get("company_id"),
          email: query.get("email"),
        });
      } catch (er: any) {
        setEr(er.message);
      }
      setLoading(false);
    },
  });

  const toggleViewPassword = () => {
    setViewPassword((pre) => !pre);
  };

  const toggleViewConfirmPassword = () => {
    setViewConfirmPassword((pre) => !pre);
  };
  return (
    <div className="flex bg-[#F3F3F3] pb-6 relative">
      <div className="mx-auto mt-10">
        <img className="mx-auto" src={logoHR} alt="" />
        <div className="flex flex-col text-center font-semibold text-3xl">
          <div className="mt-4">
            <FormattedMessage id="auth.hr.management.system" />
          </div>
          <div className="mt-6">
            <FormattedMessage id="auth.reset.password" />
          </div>
        </div>

        {/* form login */}
        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="p-6 bg-[#FBFCFD] mt-6 rounded-xl flex flex-col gap-10"
        >
          <div className="flex flex-col gap-2">
            <FormattedMessage id="auth.password" />
            <div className="relative">
              <input
                name="password"
                value={formik.values.password}
                onChange={(e: any) => {
                  formik.handleChange(e);
                  setEr("");
                }}
                type={`${viewPassword ? "text" : "password"}`}
                className="py-3 pl-4 w-80 bg-[#F1F3F5] rounded-lg outline-none"
              />
              {viewPassword && (
                <FontAwesomeIcon
                  onClick={toggleViewPassword}
                  className="cursor-pointer absolute top-5 right-3"
                  icon={faEye}
                />
              )}
              {!viewPassword && (
                <FontAwesomeIcon
                  onClick={toggleViewPassword}
                  className="cursor-pointer absolute top-5 right-3"
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
          <div className="flex flex-col gap-2 relative">
            <FormattedMessage id="auth.confirm.password" />
            <div className="relative">
              <input
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={(e: any) => {
                  formik.handleChange(e);
                  setEr("");
                }}
                type={`${viewConfirmPassword ? "text" : "password"}`}
                className="py-3 pl-4 w-80 bg-[#F1F3F5] rounded-lg outline-none"
              />
              {viewConfirmPassword && (
                <FontAwesomeIcon
                  onClick={toggleViewConfirmPassword}
                  className="cursor-pointer absolute top-5 right-3"
                  icon={faEye}
                />
              )}
              {!viewConfirmPassword && (
                <FontAwesomeIcon
                  onClick={toggleViewConfirmPassword}
                  className="cursor-pointer absolute top-5 right-3"
                  icon={faEyeSlash}
                />
              )}
            </div>

            {!!formik.errors.confirmPassword && (
              <div className="text-red-500">
                <FormattedMessage id={formik.errors.confirmPassword} />
              </div>
            )}
            {er && <div className="text-red-500 text-center max-w-[300px] mx-auto">{er}</div>}
          </div>

          <Button disabled={loading ? true : false} type="submit" className="p-3">
            <Spinner hidden={loading ? false : true} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
            <FormattedMessage id="confirm" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

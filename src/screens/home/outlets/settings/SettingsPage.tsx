import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { changePassword } from "../../../../services/auth/changePassword";
import { IchangePasswordParams } from "../../../../models/auth/changePassword";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SettingsPage = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik<IchangePasswordParams>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().min(8, "auth.password.min").max(16, "auth.password.max"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password")], "auth.confirm.password.matched"),
    }),
    onSubmit: async (values: IchangePasswordParams) => {
      setLoading(true);
      try {
        await changePassword(values);
      } catch (er) {
        alert(er);
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
    <div className="mt-10">
      <div className="font-semibold text-3xl">
        <FormattedMessage id="auth.change.password" />
      </div>
      <form onSubmit={formik.handleSubmit} className="mt-6 flex flex-col gap-6 bg-[#FFFFFF] rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <FormattedMessage id="auth.password" />
          <div className="relative">
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
        </div>

        <Button disabled={loading ? true : false} type="submit" className="p-3">
          <Spinner hidden={loading ? false : true} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
          <FormattedMessage id="submit" />
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;

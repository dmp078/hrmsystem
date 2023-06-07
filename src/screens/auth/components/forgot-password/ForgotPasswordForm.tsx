import React, { memo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IforgotPasswordParams } from "../../../../models/auth/forgotPasswordAuth";
import { logoHR } from "../../../../assets/images";
import { ROUTES } from "../../../../configs/routes/ROUTES";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  showToast: boolean;
  toggleToast: (payload: boolean) => void;
  loading: boolean;
  erMessage: string;
  handleSubmit: (values: IforgotPasswordParams) => void;
  upadteErMessage: (payload: string) => void;
}

const ForgotPasswordForm = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const { showToast, toggleToast, loading, erMessage, upadteErMessage, handleSubmit } = props;

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);

    upadteErMessage("");
  };

  return (
    <div className="flex bg-[#F3F3F3] pb-6 relative">
      {showToast && (
        <div className="absolute top-6 right-6 py-3 px-4 gap-3 rounded-lg flex justify-between bg-green-600/[.2] text-green-600">
          <FormattedMessage id="success" />
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

        {/* form forgot password */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ email });
          }}
          action=""
          className="p-6 bg-[#FBFCFD] mt-6 rounded-xl flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2 font-semibold">
            <FormattedMessage id="auth.email" />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              className={`bg-[#F1F3F5] w-full p-3 outline-none rounded-xl`}
            />
            {erMessage && <div className="text-red-500">{erMessage}</div>}
          </div>

          <Button disabled={loading ? true : false} type="submit" className="p-3">
            <Spinner hidden={loading ? false : true} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
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

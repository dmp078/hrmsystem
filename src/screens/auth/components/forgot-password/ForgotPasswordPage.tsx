import React, { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { useFormik } from "formik";
import { IforgotPasswordParams } from "../../../../models/auth/forgotPasswordAuth";
import { forgotPassword } from "../../../../services/auth/fotgotPassword";

const ForgotPasswordPage = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [erMessage, setErMessage] = useState<string>("");

  const handleSubmit = async (values: IforgotPasswordParams) => {
    setLoading(true);

    try {
      await forgotPassword(values);

      toggleToast(true);
    } catch (er: any) {
      upadteErMessage(er.message);
    }

    setLoading(false);
  };

  const toggleToast = (payload: boolean) => {
    setShowToast(payload);
  };

  const upadteErMessage = (payload: string) => {
    setErMessage(payload);
  };

  return (
    <>
      <ForgotPasswordForm
        upadteErMessage={upadteErMessage}
        erMessage={erMessage}
        loading={loading}
        showToast={showToast}
        toggleToast={toggleToast}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ForgotPasswordPage;

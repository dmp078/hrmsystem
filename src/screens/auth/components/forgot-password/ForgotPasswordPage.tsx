import React, { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { useFormik } from "formik";
import { IforgotPasswordParams } from "../../../../models/auth/forgotPasswordAuth";

const ForgotPasswordPage = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const formik = useFormik<IforgotPasswordParams>({
    initialValues: {
      email: "",
    },
    onSubmit: (values: IforgotPasswordParams) => {
      console.log(values);
    },
  });

  const toggleToast = (payload: boolean) => {
    setShowToast(payload);
  };

  return (
    <>
      <ForgotPasswordForm
        showToast={showToast}
        toggleToast={toggleToast}
        formik={formik}
      />
    </>
  );
};

export default ForgotPasswordPage;

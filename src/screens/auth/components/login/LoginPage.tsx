import React, { useEffect, useRef, useState } from "react";
import LoginForm from "./LoginForm";
import { getCompany } from "../../../../services/company/getCompany";
import { IloginParams } from "../../../../models/auth/loginAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { onLogin } from "../../../../services/auth/login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RESPONSE_SUCCESS } from "../../../../configs/responses-code";
import { ROUTES } from "../../../../configs/routes/ROUTES";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [companies, setCompanies] = useState<Array<any>>([]);
  const [companyActive, setCompanyActive] = useState<string | null>(null);
  const [forceRender, setForceRender] = useState<boolean>(false);
  const [showToastEr, setShowToastEr] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCompany().then((res) => setCompanies(res));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowToastEr(false);
    }, 1500);
  }, [showToastEr]);

  const formik = useFormik<IloginParams>({
    initialValues: {
      username: "",
      password: "",
      company_id: null,
    },
    validationSchema: Yup.object({
      username: Yup.string().max(30, "auth.username.max"),
      password: Yup.string()
        .min(8, "auth.password.min")
        .max(16, "auth.password.max"),
      company_id: Yup.string().required("auth.company.require"),
    }),
    onSubmit: async (values: IloginParams) => {
      setLoading(true);

      try {
        await onLogin(values);
      } catch (err: any) {
        if (err.response && err.response.status !== RESPONSE_SUCCESS) {
          setShowToastEr(true);
        }
      }

      setLoading(false);
    },
  });

  const handleChangeCompanyActive = (id: number) => {
    formik.values.company_id = id;
    formik.errors.company_id = undefined;
    setCompanyActive(
      companies.filter((company) => company.id == formik.values.company_id)[0][
        "name"
      ]
    );
  };

  const forceRenderComponent = () => {
    setForceRender((pre) => !pre);
  };

  const handleDeleteUsername = () => {
    formik.values.username = "";
    formik.errors.username = undefined;
    forceRenderComponent();
  };

  const handleDeletePassword = () => {
    formik.values.password = "";
    formik.errors.password = undefined;
    forceRenderComponent();
  };

  const toggleToastEr = (payload: boolean) => {
    setShowToastEr(payload);
  };

  return (
    <>
      <LoginForm
        loading={loading}
        showToastEr={showToastEr}
        toggleToastEr={toggleToastEr}
        handleDeleteUsername={handleDeleteUsername}
        handleDeletePassword={handleDeletePassword}
        companyActive={companyActive}
        handleChangeCompanyActive={handleChangeCompanyActive}
        formik={formik}
        companies={companies}
      />
    </>
  );
};

export default LoginPage;
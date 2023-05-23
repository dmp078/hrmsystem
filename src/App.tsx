import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./screens/auth/components/login/LoginPage";
import HomePage from "./screens/home/components/HomePage";
import PrivateRouter from "./commons/components/PrivateRouter";
import { ROUTES } from "./configs/routes/ROUTES";
import ForgotPasswordPage from "./screens/auth/components/forgot-password/ForgotPasswordPage";
import AttendencePage from "./screens/home/components/attendence/components/AttendencePage";
import { home } from "./configs/routes/baseRoutes";
import AuthPage from "./screens/auth/components/AuthPage";
import EmployeePage from "./screens/home/components/employee/components/EmployeeManagement/EmployeePage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import UserPage from "./screens/home/components/user/UserPage";
import PayrollPage from "./screens/home/components/payroll/PayrollPage";
import MasterPage from "./screens/home/components/master/MasterPage";
import LeavePage from "./screens/home/components/leave/LeavePage";
import SettingsPage from "./screens/home/components/settings/SettingsPage";
import AddEmployee from "./screens/home/components/employee/components/AddEmployee/AddEmployee";
import EmployeeForm from "./screens/home/components/employee/components/EmployeeManagement/EmployeeForm";
import NotFound from "./screens/others/NotFound";
import EmployeeInformation from "./screens/home/components/employee/components/AddEmployee/components/EmployeeInformation";
import ContractInformation from "./screens/home/components/employee/components/AddEmployee/components/ContractInformation";
import EmploymentDetails from "./screens/home/components/employee/components/AddEmployee/components/EmploymentDetails";
import SalaryWages from "./screens/home/components/employee/components/AddEmployee/components/SalaryWages";
import Others from "./screens/home/components/employee/components/AddEmployee/components/Others";

function App() {
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (
      auth.token &&
      (window.location.pathname.includes(ROUTES.auth) ||
        window.location.pathname == "/")
    ) {
      window.location.replace(ROUTES.home);
    }
  }, []);

  return (
    <Routes>
      <Route path={ROUTES.auth} element={<AuthPage />}>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.forgotPassword} element={<ForgotPasswordPage />} />
      </Route>
      <Route
        path={home}
        element={
          <PrivateRouter>
            <HomePage />
          </PrivateRouter>
        }
      >
        <Route path={ROUTES.attendance} element={<AttendencePage />} />
        <Route path={ROUTES.leave} element={<LeavePage />} />
        <Route path={ROUTES.payroll} element={<PayrollPage />} />
        <Route path={ROUTES.employee} element={<EmployeePage />}>
          <Route path="" element={<EmployeeForm />} />
          <Route path={ROUTES.add} element={<AddEmployee />}>
            <Route path="" element={<Navigate to={ROUTES.employeeInfor} />} />
            <Route
              path={ROUTES.employeeInfor}
              element={<EmployeeInformation />}
            />
            <Route
              path={ROUTES.contractInfor}
              element={<ContractInformation />}
            />
            <Route
              path={ROUTES.employmentDetails}
              element={<EmploymentDetails />}
            />
            <Route path={ROUTES.salaryWages} element={<SalaryWages />} />
            <Route path={ROUTES.others} element={<Others />} />
          </Route>
        </Route>
        <Route path={ROUTES.user} element={<UserPage />} />
        <Route path={ROUTES.master} element={<MasterPage />} />
        <Route path={ROUTES.settings} element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

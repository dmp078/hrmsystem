import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./screens/auth/components/login/LoginPage";
import HomePage from "./screens/home/pages/HomePage";
import PrivateRouter from "./commons/components/PrivateRouter";
import { ROUTES } from "./configs/routes/ROUTES";
import ForgotPasswordPage from "./screens/auth/components/forgot-password/ForgotPasswordPage";
import { home } from "./configs/routes/baseRoutes";
import AuthPage from "./screens/auth/pages/AuthPage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import AttendencePage from "./screens/home/outlets/attendence/pages/AttendencePage";
import LeavePage from "./screens/home/outlets/leave/LeavePage";
import PayrollPage from "./screens/home/outlets/payroll/PayrollPage";
import EmployeePage from "./screens/home/outlets/employee/pages/EmployeePage";
import EmployeeForm from "./screens/home/outlets/employee/outlets/EmployeeManagement/EmployeeForm";
import AddEmployee from "./screens/home/outlets/employee/outlets/AddEmployee/pages/AddEmployee";
import EmployeeInformation from "./screens/home/outlets/employee/outlets/AddEmployee/outlets/EmployeeInformation";
import ContractInformation from "./screens/home/outlets/employee/outlets/AddEmployee/outlets/ContractInformation";
import EmploymentDetails from "./screens/home/outlets/employee/outlets/AddEmployee/outlets/EmploymentDetails";
import SalaryWages from "./screens/home/outlets/employee/outlets/AddEmployee/outlets/SalaryWages";
import Others from "./screens/home/outlets/employee/outlets/AddEmployee/outlets/Others";
import UserPage from "./screens/home/outlets/user/UserPage";
import MasterPage from "./screens/home/outlets/master/MasterPage";
import SettingsPage from "./screens/home/outlets/settings/SettingsPage";
import NotFound from "./screens/others/NotFound";

function App() {
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (auth.token && (window.location.pathname.includes(ROUTES.auth) || window.location.pathname == "/")) {
      window.location.replace(ROUTES.home);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.home} />} />
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
            <Route path={ROUTES.employeeInfor} element={<EmployeeInformation />} />
            <Route path={ROUTES.contractInfor} element={<ContractInformation />} />
            <Route path={ROUTES.employmentDetails} element={<EmploymentDetails />} />
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

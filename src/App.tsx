import React, { useEffect, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRouter from "./commons/components/PrivateRouter";
import { ROUTES } from "./configs/routes/ROUTES";
import { home } from "./configs/routes/baseRoutes";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import SuspenseWrapper from "./commons/components/SuspenseWrapper";

const AuthPage = lazy(() => import("./screens/auth/pages/AuthPage"));
const LoginPage = lazy(() => import("./screens/auth/components/login/LoginPage"));
const ForgotPasswordPage = lazy(() => import("./screens/auth/components/forgot-password/ForgotPasswordPage"));
const ResetPassword = lazy(() => import("./screens/auth/components/reset-password/ResetPassword"));

const HomePage = lazy(() => import("./screens/home/pages/HomePage"));
const AttendencePage = lazy(() => import("./screens/home/outlets/attendence/pages/AttendencePage"));
const LeavePage = lazy(() => import("./screens/home/outlets/leave/LeavePage"));
const MasterPage = lazy(() => import("./screens/home/outlets/master/MasterPage"));
const SettingsPage = lazy(() => import("./screens/home/outlets/settings/SettingsPage"));
const UserPage = lazy(() => import("./screens/home/outlets/user/UserPage"));
const PayrollPage = lazy(() => import("./screens/home/outlets/payroll/PayrollPage"));
const EmployeePage = lazy(() => import("./screens/home/outlets/employee/pages/EmployeePage"));
const EmployeeForm = lazy(() => import("./screens/home/outlets/employee/outlets/EmployeeManagement/EmployeeForm"));
const AddEmployee = lazy(() => import("./screens/home/outlets/employee/outlets/AddEmployee/pages/AddEmployee"));

const EmployeeInformation = lazy(
  () => import("./screens/home/outlets/employee/outlets/AddEmployee/outlets/EmployeeInformation")
);
const ContractInformation = lazy(
  () => import("./screens/home/outlets/employee/outlets/AddEmployee/outlets/ContractInformation")
);
const EmploymentDetails = lazy(
  () => import("./screens/home/outlets/employee/outlets/AddEmployee/outlets/EmploymentDetails")
);
const SalaryWages = lazy(() => import("./screens/home/outlets/employee/outlets/AddEmployee/outlets/SalaryWages"));
const Others = lazy(() => import("./screens/home/outlets/employee/outlets/AddEmployee/outlets/Others"));

const NotFound = lazy(() => import("./screens/others/NotFound"));

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
      <Route
        path={ROUTES.auth}
        element={
          <SuspenseWrapper>
            <AuthPage />
          </SuspenseWrapper>
        }
      >
        <Route path="" element={<Navigate to={ROUTES.login} />} />
        <Route
          path={ROUTES.login}
          element={
            <SuspenseWrapper>
              <LoginPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={ROUTES.forgotPassword}
          element={
            <SuspenseWrapper>
              <ForgotPasswordPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={ROUTES.resetPassword}
          element={
            <SuspenseWrapper>
              <ResetPassword />
            </SuspenseWrapper>
          }
        />
      </Route>
      <Route
        path={home}
        element={
          <PrivateRouter>
            <SuspenseWrapper>
              <HomePage />
            </SuspenseWrapper>
          </PrivateRouter>
        }
      >
        <Route
          path={ROUTES.attendance}
          element={
            <SuspenseWrapper>
              <AttendencePage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={ROUTES.leave}
          element={
            <SuspenseWrapper>
              <LeavePage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={ROUTES.payroll}
          element={
            <SuspenseWrapper>
              <PayrollPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={ROUTES.employee}
          element={
            <SuspenseWrapper>
              <EmployeePage />
            </SuspenseWrapper>
          }
        >
          <Route
            path=""
            element={
              <SuspenseWrapper>
                <EmployeeForm />
              </SuspenseWrapper>
            }
          />
          <Route
            path={ROUTES.add}
            element={
              <SuspenseWrapper>
                <AddEmployee />
              </SuspenseWrapper>
            }
          >
            <Route path="" element={<Navigate to={ROUTES.employeeInfor} />} />
            <Route
              path={ROUTES.employeeInfor}
              element={
                <SuspenseWrapper>
                  <EmployeeInformation />
                </SuspenseWrapper>
              }
            />
            <Route
              path={ROUTES.contractInfor}
              element={
                <SuspenseWrapper>
                  <ContractInformation />
                </SuspenseWrapper>
              }
            />
            <Route
              path={ROUTES.employmentDetails}
              element={
                <SuspenseWrapper>
                  <EmploymentDetails />
                </SuspenseWrapper>
              }
            />
            <Route
              path={ROUTES.salaryWages}
              element={
                <SuspenseWrapper>
                  <SalaryWages />
                </SuspenseWrapper>
              }
            />
            <Route
              path={ROUTES.others}
              element={
                <SuspenseWrapper>
                  <Others />
                </SuspenseWrapper>
              }
            />
          </Route>
        </Route>
        <Route
          path={ROUTES.user}
          element={
            <SuspenseWrapper>
              <UserPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={ROUTES.master}
          element={
            <SuspenseWrapper>
              <MasterPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={ROUTES.settings}
          element={
            <SuspenseWrapper>
              <SettingsPage />
            </SuspenseWrapper>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <SuspenseWrapper>
            <NotFound />
          </SuspenseWrapper>
        }
      />
    </Routes>
  );
}

export default App;

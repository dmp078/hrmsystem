import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../configs/routes/ROUTES";

interface Props {
  children: any;
}

const PrivateRouter = (props: Props) => {
  const { children } = props;

  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.token) {
    return <Navigate to={ROUTES.auth + "/" + ROUTES.login} />;
  }

  return <>{children}</>;
};

export default PrivateRouter;

import * as React from "react";
import { Navigate } from "react-router";

const PrivateRoute = (props: PrivateRouteProps) => {
  let TOKEN = localStorage.getItem("token");

  if (!TOKEN) {
    return <Navigate to={"/login"} />;
  } else {
      return props.children
  }
};

interface PrivateRouteProps {
  children: JSX.Element;
}

export default PrivateRoute;
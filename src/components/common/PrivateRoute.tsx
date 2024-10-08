import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  allowedRoles?: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  allowedRoles = [],
}) => {

  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user"))
  const location = useLocation();

  if(!user){
    return <Navigate to={"/"} state={{ from: location }} replace/>
  }

  if (allowedRoles.length && !allowedRoles.includes(user?.role || "")) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Component />;
};

export default PrivateRoute;

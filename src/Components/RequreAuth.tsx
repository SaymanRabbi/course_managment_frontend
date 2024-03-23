import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserStore } from "../Store/UserStore";
import useAuth from "../hooks/useAuth";
interface RequireAuthProps {
  allowedRoles: string[];
}
const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const { auth } = useAuth();
  console.log(auth?.role);
  const location = useLocation();
  const { getUserByToken } = useUserStore((state) => state);
  useEffect(() => {
    // Check if the route has changed before calling the function

    getUserByToken();
    // Update the previous route after the function call
  }, [location]);
  return allowedRoles?.includes(auth?.role) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

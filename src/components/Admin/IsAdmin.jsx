import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

function IsAdmin() {
  const { user } = useContext(AuthContext);
  if (user.role !== "admin") {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
}

export default IsAdmin;

import { useContext } from "react";
import SidebarComponent from "./Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./Auth/AuthContext";

function Layout() {
  const {user} = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login"/>
  }

  return (
    <div className="flex h-screen">
      <SidebarComponent />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
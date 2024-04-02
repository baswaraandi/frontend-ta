import SidebarComponent from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
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
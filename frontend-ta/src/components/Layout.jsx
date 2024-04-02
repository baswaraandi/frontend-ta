import SidebarComponent from './Sidebar'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
        <SidebarComponent/>
        <Outlet/>
    </div>
  )
}

export default Layout
import { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  MapPin,
  Activity,
  X,
  Menu as MenuIcon,
  LogOut,
} from "react-feather";
import { AuthContext } from "./Auth/AuthContext";
import { UserIcon } from "lucide-react";

function SidebarComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user, logout } = useContext(AuthContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log(user);
  return (
    <Sidebar collapsed={!isSidebarOpen} className="fixed top-0 left-0 h-full">
      <Menu className="bg-blue-950 text-white h-full shadow-xl">
        <MenuItem
          className="py-2 items-center pt-12 w-full"
          component={<Link to="/" />}
        >
          <div className="py-2 text-sm hover:text-blue-500 flex items-center w-full">
            <Home className="mr-2" size={16} />
            {isSidebarOpen && <span className="ml-2 font-medium">Home</span>}
          </div>
        </MenuItem>
        {user.role != "mahasiswa" && (
          <MenuItem
            className="py-2 items-center"
            component={<Link to="/admin" />}
          >
            <div className=" py-2 text-sm hover:text-blue-500 flex items-center w-full">
              <User className="mr-2" size={16} />
              {isSidebarOpen && <span className="ml-2 font-medium">Admin</span>}
            </div>
          </MenuItem>
        )}
        <MenuItem
          className="py-2 items-center"
          component={<Link to="/peta-bandung" />}
        >
          <div className=" py-2 text-sm hover:text-blue-500 flex items-center w-full">
            <MapPin className="mr-2" size={16} />
            {isSidebarOpen && (
              <span className="ml-2 font-medium">Peta Kota Bandung</span>
            )}
          </div>
        </MenuItem>
        <MenuItem
          className="py-2 items-center"
          component={<Link to="/mapping-area" />}
        >
          <div className=" py-2 text-sm hover:text-blue-500 flex items-center w-full">
            <MapPin className="mr-2" size={16} />
            {isSidebarOpen && (
              <span className="ml-2 font-medium">Peta Kendaraan</span>
            )}
          </div>
        </MenuItem>
        <MenuItem
          className="py-2 items-center"
          component={<Link to="/gwr-page" />}
        >
          <div className=" py-2 text-sm hover:text-blue-500 flex items-center w-full">
            <Activity className="mr-2" size={16} />
            {isSidebarOpen && (
              <span className="ml-2 font-medium">Analisis Model</span>
            )}
          </div>
        </MenuItem>
      </Menu>
      <div className="absolute bottom-0 w-full px-4 py-2 bg-gray-200">
        <div className="flex items-center justify-between">
          <UserIcon />
          <div>
            <p className="text-sm font-semibold">{user.fullname}</p>
            <p className="text-xs">{user.email}</p>
          </div>
          <button
            className=""
            onClick={() => {
              logout();
            }}
          >
            <LogOut></LogOut>
          </button>
        </div>
      </div>
      <button
        className="absolute top-0 right-0 mt-2 mr-8 sm:hidden flex items-center justify-center bg-blue-600 rounded-full p-2 hover:bg-blue-700"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MenuIcon className="text-white" size={24} />
        )}
      </button>
    </Sidebar>
  );
}

export default SidebarComponent;

import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  MapPin,
  Activity,
  X,
  Menu as MenuIcon,
} from "react-feather";

function SidebarComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState({
    name: "Andyka Baswara",
    email: "baswaraandi@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Sidebar collapsed={!isSidebarOpen}>
      <Menu className="bg-blue-950 text-white h-full shadow-xl">
        <MenuItem className="py-2 items-center pt-12 w-full">
          <Link
            to="/"
            className="py-2 text-sm hover:text-blue-500 flex items-center w-full"
          >
            <Home className="mr-2" size={16} />
            {isSidebarOpen && <span className="ml-2 font-medium">Home</span>}
          </Link>
        </MenuItem>
        <MenuItem className="py-2 items-center">
          <Link
            to="/admin"
            className=" py-2 text-sm hover:text-blue-500 flex items-center w-full"
          >
            <User className="mr-2" size={16} />
            {isSidebarOpen && <span className="ml-2 font-medium">Admin</span>}
          </Link>
        </MenuItem>
        <MenuItem className="py-2 items-center">
          <Link
            to="/mapping-area"
            className=" py-2 text-sm hover:text-blue-500 flex items-center w-full"
          >
            <MapPin className="mr-2" size={16} />
            {isSidebarOpen && <span className="ml-2 font-medium">Mapping Area</span>}
          </Link>
        </MenuItem>
        <MenuItem className="py-2 items-center">
          <Link
            to="/gwr-page"
            className=" py-2 text-sm hover:text-blue-500 flex items-center w-full"
          >
            <Activity className="mr-2" size={16} />
            {isSidebarOpen && <span className="ml-2 font-medium">GWR Page</span>}
          </Link>
        </MenuItem>
      </Menu>
      <div className="absolute bottom-0 w-full px-4 py-2 bg-gray-200">
        <div className="flex items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs">{user.email}</p>
          </div>
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

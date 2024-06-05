import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/Layout.jsx";
import MappingAreaPage from "./pages/MappingAreaPage.jsx";
import GWRPage from "./pages/GWRPage.jsx";
import PetaBandung from "./pages/KotaBandungMap.jsx";
import Login from "./components/Auth/Login.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";
import Register from "./components/Auth/Register.jsx";
import UserManagement from "./components/Admin/User/UserManagement.jsx";
import KendaraanManagement from "./components/Admin/Kendaraan/KendaraanManagement.jsx";
import AnalisisManagement from "./components/Admin/Analisis/AnalisisManagement.jsx";
import EditKendaraanManagement from "./components/Admin/Kendaraan/EditKendaraanManagement.jsx";
import IsAdmin from "./components/Admin/IsAdmin.jsx";
import GeoMap from "./pages/GeoMap.jsx";

const router = createBrowserRouter([
  {
    element: <GeoMap />,
    path: "/coba",
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Register />,
    path: "/register",
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <IsAdmin />,
        children: [
          {
            element: <UserManagement />,
            path: "/user-management",
          },
          {
            element: <KendaraanManagement />,
            path: "/kendaraan-management",
          },
          {
            element: <EditKendaraanManagement />,
            path: "/kendaraan-management/:id",
          },
          {
            element: <AnalisisManagement />,
            path: "/analisis-management",
          },
          {
            path: "/admin",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "/mapping-area",
        element: <MappingAreaPage />,
      },
      {
        path: "/gwr-page",
        element: <GWRPage />,
      },
      {
        path: "/peta-bandung",
        element: <PetaBandung />,
      },
    ],
  },
]);

function App() {
  console.log(import.meta.env.VITE_BACKEND_URL);
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/Layout.jsx";
import MappingAreaPage from "./pages/MappingAreaPage.jsx";
import GWRPage from "./pages/GWRPage.jsx";
import PetaBandung from "./pages/KotaBandungMap.jsx";
import Login from "./components/Auth/Login.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";
import Register from "./components/Auth/Register.jsx";
import UserManagement from "./components/Admin/UserManagement.jsx";
import KendaraanManagement from "./components/Admin/KendaraanManagement.jsx";
import AnalisisManagement from "./components/Admin/AnalisisManagement.jsx";

const router = createBrowserRouter([
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
        element: <UserManagement />,
        path: "/user-management",
      },
      {
        element: <KendaraanManagement />,
        path: "/kendaraan-management",
      },
      {
        element: <AnalisisManagement />,
        path: "/analisis-management",
      },
      {
        path: "/admin",
        element: <Dashboard />,
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

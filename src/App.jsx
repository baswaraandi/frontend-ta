import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SidebarComponent from "./components/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/Layout.jsx";
import MappingAreaPage from "./pages/MappingAreaPage.jsx";
import GWRPage from "./pages/GWRPage.jsx";
import PetaBandung from "./pages/KotaBandungMap.jsx"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
  return <RouterProvider router={router} />;
}

export default App;

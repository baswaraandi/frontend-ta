import { useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SidebarComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Sidebar
      sidebar={
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/mapping-area">Mapping Area</Link>
          <Link to="/gwr-page">GWR Page</Link>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { background: "white", width: "200px" } }}
    >
      <div>
        <button onClick={() => setSidebarOpen(true)}>Open Sidebar</button>
        <div>Main Content</div>
      </div>
    </Sidebar>
  );
}

export default SidebarComponent;

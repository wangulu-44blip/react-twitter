import { Outlet } from "react-router";
import "../App.css";
import Sidebar from "../components/Sidebar";


function Layout() {
  return (
    <div className="layout">
      <Sidebar className="sidebar" />
      <main className="main">
        
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
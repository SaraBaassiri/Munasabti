import React from "react";
import AdminNav from "./AdminNavBar/AdminNav";
import "./Admin.css";
import Navbar from "./navbar/Navbar";
import SideBar from "./Sidebar/Sidebar";

function Admin(props) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const openSidebar = (incoming) => {
    setSidebarOpen(true);
  };

  const closeSidebar = (incoming) => {
    setSidebarOpen(false);
  };

  React.useEffect(() => {
    document.title = "Munasabti - Admin";
  }, []);

  return (
    <div className="Admincontainer">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <div className="InnerContainer">{props.children}</div>
      <SideBar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default Admin;

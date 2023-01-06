import React from "react";
import "./Admin.css";
import Navbar from "./navbar/Navbar";
import SideBar from "./Sidebar/Sidebar";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import AnimatedRoutes from "../../Components/AnimatedRoutes";

function Admin(props) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const openSidebar = (incoming) => {
    setSidebarOpen(true);
  };

  const closeSidebar = (incoming) => {
    setSidebarOpen(false);
  };

  React.useEffect(() => {
    document.title = "Munasabti | Admin";
    // if not user redirect to login
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/auth/login");
      }
    });
  });

  return (
    // <AnimatedRoutes>
    <div className="Admincontainer">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <div className="InnerContainer">{props.children}</div>
      <SideBar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
    // </AnimatedRoutes>
  );
}

export default Admin;

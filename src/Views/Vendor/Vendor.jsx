import React from "react";
import "./vendor.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import VendorNav from "./VendorNavbar/VendorNavbar";
import VendorSidebar from "./VendorSidebar/VendorSidebar";

function Vendor(props) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sideBarMini, setSideBarMini] = React.useState(false);

  const openSidebar = (incoming) => {
    setSidebarOpen(true);
  };

  const closeSidebar = (incoming) => {
    setSidebarOpen(false);
  };

  React.useEffect(() => {
    document.title = "Munasabti | Vendor";

    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/auth/login");
      }
    });
  });

  return (
    <div
      className={sideBarMini ? "VendorcontainerClosed" : "VendorcontainerPanel"}
    >
      <VendorNav sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <div className="InnerContainerVendor">{props.children}</div>
      <VendorSidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        sidebarSmaller={sideBarMini}
        setSidebarSmaller={setSideBarMini}
      />
    </div>
  );
}

export default Vendor;

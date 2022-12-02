import React from "react";
import AdminNav from "./AdminNavBar/AdminNav";
import "./Admin.css";

function Admin(props) {
  React.useEffect(() => {
    document.title = "Munasabti - Admin";
  }, []);

  return (
    <div className="adminContainer">
      <AdminNav />
      <div className="InnerContainer">{props.children}</div>
    </div>
  );
}

export default Admin;

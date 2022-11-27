import React from "react";
import AdminNav from "./AdminNavBar/AdminNav";
import "./Admin.css";

function Admin(props) {
  return (
    <div className="adminContainer">
      <AdminNav />
      <div className="InnerContainer">{props.children}</div>
    </div>
  );
}

export default Admin;

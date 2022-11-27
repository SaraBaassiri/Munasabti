import React from "react";
import "./Nav.css";

function AdminNav() {
  return (
    <div className="NavBar">
      <div className="NavBarItem">
        <a href="/admin">Home</a>
        <a href="/admin/users">Users</a>
        <a href="/admin/clients">Clients</a>
      </div>
    </div>
  );
}

export default AdminNav;

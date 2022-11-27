import React from "react";
import "./Nav.css";
import { HiOutlineHome } from "react-icons/hi";

function AdminNav() {
  return (
    <div className="NavBar">
      <div className="NavBarItem">
        <a href="/admin"><HiOutlineHome/> Home</a>
        <a href="/admin/users">Users</a>
        <a href="/admin/clients">Vendors</a>
      </div>
    </div>
  );
}

export default AdminNav;

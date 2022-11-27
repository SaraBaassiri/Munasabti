import React from "react";
import "./Nav.css";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { BiStoreAlt } from "react-icons/bi";

function AdminNav() {
  return (
    <div className="NavBar">
      <div className="NavBarItem">
        <a href="/admin"><HiOutlineHome/> Home</a>
        <a href="/admin/users"><HiOutlineUsers/> Users</a>
        <a href="/admin/clients"><BiStoreAlt/> Vendors</a>
      </div>
    </div>
  );
}

export default AdminNav;

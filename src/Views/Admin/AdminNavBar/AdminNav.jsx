import React from "react";
import "./Nav.css";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

function AdminNav() {
  return (
    <div className="NavBar">
      <div className="NavBarItem">
        <h3>Menu</h3>
        <a href="/admin"><HiOutlineHome/> Home</a>
        <a href="/admin/users"><HiOutlineUsers/> Users</a>
        <a href="/admin/vendors"><BiStoreAlt/> Vendors</a>
        <a href="/admin/reviews"><AiOutlineStar/> Reviews</a>
      </div>
    </div>
  );
}

export default AdminNav;

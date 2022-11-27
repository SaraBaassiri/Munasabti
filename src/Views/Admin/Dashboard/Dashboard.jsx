import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="AdminDash">
      <div className="topBar">
        <h1 className="titleDash">Dashboard</h1>
      </div>
      <div className="firstRow">
        <div className="firstRowItem">
          <h2>Users</h2>
          <p>Number of users</p>
        </div>
        <div className="firstRowItem">
          <h2>Vendors</h2>
          <p>Number of vendors</p>
        </div>
        <div className="firstRowItem">
          <h2>Events</h2>
          <p>Number of reviews</p>
        </div>
        <div className="firstRowItem">
          <h2>Events</h2>
          <p>Number of reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

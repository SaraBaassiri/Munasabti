import React from "react";

function Users() {
  return (
    <div className="AdminUsers">
      <div className="topBar">
        <h1 className="titleUsers">Users</h1>
      </div>
      <table className="UsersTable">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </table>
    </div>
  );
}

export default Users;

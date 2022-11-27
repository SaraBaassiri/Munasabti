import React from "react";

function Admin(props) {
  return (
    <div>
      <h1>Admin</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Admin;

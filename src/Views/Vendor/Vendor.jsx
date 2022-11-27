import React from "react";

function Vendor(props) {
  return (
    <div>
      <h1>Vendor</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Vendor;

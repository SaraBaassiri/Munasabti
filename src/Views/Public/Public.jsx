import React from "react";
import PublicNav from "./PublicNav/PublicNav";

function Public({ children }) {
  return (
    <div>
      <PublicNav />
      <div
        style={{
          marginTop: "120px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Public;

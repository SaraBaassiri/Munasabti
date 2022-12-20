import React from "react";
import PublicNav from "./PublicNav/PublicNav";

function Public({ children }) {
  return (
    <div>
      <PublicNav />
      <div
        style={{
          marginTop: "170px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Public;

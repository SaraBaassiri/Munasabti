import React from "react";
import Footer from "./Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default Public;

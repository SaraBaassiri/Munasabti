import React from "react";
import AnimatedRoutes from "../../../Components/AnimatedRoutes";

function Inspirations(props) {
  return (
    <AnimatedRoutes>
      <div>
        <h1>Inspirations</h1>
        <div>{props.children}</div>
      </div>
    </AnimatedRoutes>
  );
}

export default Inspirations;

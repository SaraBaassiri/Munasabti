import React from "react";
import { useParams } from "react-router-dom";

function InnerVendor() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default InnerVendor;
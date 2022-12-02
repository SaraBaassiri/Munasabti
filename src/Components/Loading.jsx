import React from "react";
import Lottie from "react-lottie";
import animationData from "../media/animations/loading.json";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
}

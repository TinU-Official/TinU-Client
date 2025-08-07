"use client";

import Lottie from "lottie-react";
import LottieConfetti from "@/assets/animations/confetti.json";

const Confetti = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Lottie animationData={LottieConfetti} loop autoPlay />
    </div>
  );
};

export default Confetti;

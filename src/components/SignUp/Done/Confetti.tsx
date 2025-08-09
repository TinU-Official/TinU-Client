"use client";

import Lottie from "lottie-react";
import LottieConfetti from "@/assets/animations/confetti.json";

const Confetti = () => {
  return <Lottie animationData={LottieConfetti} loop autoPlay />;
};

export default Confetti;

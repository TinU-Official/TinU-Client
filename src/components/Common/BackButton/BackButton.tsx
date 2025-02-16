"use client";
import React from "react";
import IcChevronLeft from "@/assets/icons/ic_chevron_left.svg";

export function BackButton() {
  return (
    <button onClick={() => window.history.back()}>
      <IcChevronLeft />
    </button>
  );
}

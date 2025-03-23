"use client";
import React from "react";
import IcChevronLeft from "@/assets/icons/ic_chevron_left.svg";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  link?: string;
}

export function BackButton({ link }: BackButtonProps) {
  const router = useRouter();

  const handleClickBackButton = () => {
    if (link) {
      router.push(link);
    } else {
      router.back();
    }
  };

  return (
    <button type="button" onClick={handleClickBackButton}>
      <IcChevronLeft />
    </button>
  );
}

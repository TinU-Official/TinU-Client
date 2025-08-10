"use client";
import IcChevronLeft from "@/assets/icons/ic_chevron_left.svg";
import { useRouter } from "next/navigation";
import { IconButton } from "../IconButton";

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

  return <IconButton icon={<IcChevronLeft />} label="뒤로가기" onClick={handleClickBackButton} />;
}

"use client";

import * as styles from "./landing.css";

import Button from "@/components/Common/Button/Button";
import { FirstBanner } from "@/components/Landing/FirstBanner/FirstBanner";
import { IndicatorBar } from "@/components/Landing/IndicatorBar/IndicatorBar";
import { SecondBanner } from "@/components/Landing/SecondBanner/SecondBanner";
import { ThirdBanner } from "@/components/Landing/ThirdBanner/ThirdBanner";
import { useActiveIndicator } from "@/hooks/Landing/useActiveIndicator";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  const { activeIndicator, firstBannerRef, secondBannerRef, thirdBannerRef } = useActiveIndicator();

  const handleClickStartButton = () => {
    router.push("/login");
  };

  return (
    <>
      <IndicatorBar activeIndicator={activeIndicator} />
      <FirstBanner ref={firstBannerRef} />
      <SecondBanner ref={secondBannerRef} />
      <ThirdBanner ref={thirdBannerRef} />
      <div className={styles.fixedButtonWrapper}>
        <Button onClick={handleClickStartButton}>틴유 시작하기</Button>
      </div>
    </>
  );
}

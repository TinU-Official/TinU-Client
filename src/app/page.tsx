"use client";

import { FirstBanner } from "@/components/Landing/FirstBanner/FirstBanner";
import { IndicatorBar } from "@/components/Landing/IndicatorBar/IndicatorBar";
import { SecondBanner } from "@/components/Landing/SecondBanner/SecondBanner";
import { ThirdBanner } from "@/components/Landing/ThirdBanner/ThirdBanner";
import useActiveIndicator from "@/hooks/Landing/useActiveIndicator";

export default function Landing() {
  const { activeIndicator, firstBannerRef, secondBannerRef, thirdBannerRef } = useActiveIndicator();

  return (
    <>
      <IndicatorBar activeIndicator={activeIndicator} />
      <FirstBanner ref={firstBannerRef} />
      <SecondBanner ref={secondBannerRef} />
      <ThirdBanner ref={thirdBannerRef} />
    </>
  );
}

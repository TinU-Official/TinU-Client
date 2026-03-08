"use client";

import Button from "@/components/Common/Button/Button";
import { FirstBanner } from "@/components/Landing/FirstBanner/FirstBanner";
import { IndicatorBar } from "@/components/Landing/IndicatorBar/IndicatorBar";
import { SecondBanner } from "@/components/Landing/SecondBanner/SecondBanner";
import { ThirdBanner } from "@/components/Landing/ThirdBanner/ThirdBanner";
import { useActiveIndicator } from "@/hooks/Landing/useActiveIndicator";

import * as styles from "./landing.css";

export default function LandingPage() {
  const { activeIndicator, firstBannerRef, secondBannerRef, thirdBannerRef } = useActiveIndicator();
  // const router = useRouter();

  const handleClickStartButton = () => {
    // router.push("/login")
    // 테스트용 임시 라우팅 변경
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NAVIGATE_TO_CHAT",
          payload: { userId: "123", userName: "세숑" },
        }),
      );
    }
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

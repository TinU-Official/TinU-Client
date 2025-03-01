import { useEffect, useState, useRef } from "react";

export const useActiveIndicator = () => {
  const [activeIndicator, setActiveIndicator] = useState(0);

  const firstBannerRef = useRef<HTMLDivElement>(null);
  const secondBannerRef = useRef<HTMLDivElement>(null);
  const thirdBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "firstBanner":
              setActiveIndicator(1);
              break;
            case "secondBanner":
              setActiveIndicator(2);
              break;
            case "thirdBanner":
              setActiveIndicator(3);
              break;
            default:
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (firstBannerRef.current) observer.observe(firstBannerRef.current);
    if (secondBannerRef.current) observer.observe(secondBannerRef.current);
    if (thirdBannerRef.current) observer.observe(thirdBannerRef.current);

    return () => {
      if (firstBannerRef.current) observer.unobserve(firstBannerRef.current);
      if (secondBannerRef.current) observer.unobserve(secondBannerRef.current);
      if (thirdBannerRef.current) observer.unobserve(thirdBannerRef.current);
    };
  }, []);

  return { activeIndicator, firstBannerRef, secondBannerRef, thirdBannerRef };
};

import { useEffect, useRef, useState } from "react";

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

    const bannerIndexMap: Record<string, number> = {
      firstBanner: 1,
      secondBanner: 2,
      thirdBanner: 3,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          const index = bannerIndexMap[entry.target.id];
          if (index) {
            setActiveIndicator(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const refs = [firstBannerRef, secondBannerRef, thirdBannerRef];

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return {
    activeIndicator,
    firstBannerRef,
    secondBannerRef,
    thirdBannerRef,
  };
};

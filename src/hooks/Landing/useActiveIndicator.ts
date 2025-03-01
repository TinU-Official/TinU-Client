import { useEffect, useState, useRef } from "react";

export const useActiveIndicator = () => {
  const [activeIndicator, setActiveIndicator] = useState(0);

  const bannerRefs = {
    first: useRef<HTMLDivElement>(null),
    second: useRef<HTMLDivElement>(null),
    third: useRef<HTMLDivElement>(null),
  };

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
          if (index) setActiveIndicator(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const refs = [bannerRefs.first, bannerRefs.second, bannerRefs.third];

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return {
    activeIndicator,
    firstBannerRef: bannerRefs.first,
    secondBannerRef: bannerRefs.second,
    thirdBannerRef: bannerRefs.third,
  };
};

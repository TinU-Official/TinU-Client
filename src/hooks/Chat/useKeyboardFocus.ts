import { useState, useEffect, RefObject } from "react";

interface UseKeyboardFocusProps {
  inputRef: RefObject<HTMLElement | null>;
}

export const useKeyboardFocus = ({ inputRef }: UseKeyboardFocusProps) => {
  const [isFocus, setIsFocus] = useState(false);
  let initialScrollY = 0;

  const handleInputFocus = () => {
    inputRef?.current?.focus();
    setIsFocus(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isFocus) {
        if (!initialScrollY) {
          initialScrollY = currentScrollY;
        }

        if (currentScrollY > initialScrollY) {
          window.scrollTo(0, initialScrollY);
        }
      } else {
        initialScrollY = 0;
      }
    };

    window.visualViewport?.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.visualViewport?.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFocus]);

  return {
    handleInputFocus,
  };
};

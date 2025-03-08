import { useState, useEffect } from "react";

export function useKeyboardHeight() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const getKeyboardHeight = () => {
      if (window.visualViewport) {
        const height = window.innerHeight - window.visualViewport.height;
        return height > 0 ? height : 0;
      }
      return 0;
    };

    const handleResize = () => {
      const newKeyboardHeight = getKeyboardHeight();
      const previousHeight = keyboardHeight;

      if (newKeyboardHeight > 0 && previousHeight === 0) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            requestAnimationFrame(() => {
              window.scrollTo(0, 0);
            });
          }, 100);
        });
      }

      setKeyboardHeight(newKeyboardHeight);
    };

    setKeyboardHeight(getKeyboardHeight());

    const handleFocus = (e: any) => {
      if ((e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") && getKeyboardHeight() === 0) {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
    };

    document.addEventListener("focusin", handleFocus);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }

    return () => {
      document.removeEventListener("focusin", handleFocus);

      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
    };
  }, [keyboardHeight]);

  return keyboardHeight;
}

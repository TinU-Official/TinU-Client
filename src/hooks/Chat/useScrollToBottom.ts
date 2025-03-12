import { useEffect, useRef } from "react";

interface UseScrollToBottomProps {
  dependencies?: any[];
}

export const useScrollToBottom = ({ dependencies = [] }: UseScrollToBottomProps = {}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [...dependencies]);

  return {
    scrollRef,
    scrollToBottom,
  };
};

import { useEffect, useRef } from "react";

interface UseScrollToBottomProps {
  dependencies?: any[]; // 스크롤 트리거를 위한 의존성 배열
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
  }, [...dependencies]); // 의존성 배열에 따라 스크롤 실행

  return {
    scrollRef,
    scrollToBottom,
  };
};

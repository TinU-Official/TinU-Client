"use client";

import { isServer, MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Keyboard, KeyboardResize } from "@capacitor/keyboard";

function KeyboardInsets() {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const resizeMode = isIOS ? KeyboardResize.Native : KeyboardResize.None;
    Keyboard.setResizeMode({ mode: resizeMode }).catch(() => {});

    const setVar = (name: string, value: string) => {
      document.documentElement.style.setProperty(name, value);
    };

    // Smooth sync using VisualViewport during the native keyboard animation (Android or when needed)
    let rafId: number | null = null;
    const visualViewport = window.visualViewport;

    const computeInset = () => {
      if (!visualViewport) return 0;
      const totalHeight = window.innerHeight;
      const vvHeight = visualViewport.height ?? totalHeight;
      const vvOffsetTop = visualViewport.offsetTop ?? 0;
      const overlap = totalHeight - (vvHeight + vvOffsetTop);
      return Math.max(0, Math.round(overlap));
    };

    const updateInset = () => {
      const h = computeInset();
      setVar("--keyboard-inset", `${h}px`);
    };

    const onVVChange = () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateInset);
    };

    const onWillShow = Keyboard.addListener("keyboardWillShow", (e: any) => {
      document.body.classList.add("keyboard-open");
      if (!isIOS) {
        document.body.classList.add("keyboard-anim");
        setVar("--keyboard-anim-duration", `250ms`);
        const h = e?.keyboardHeight ?? computeInset();
        setVar("--keyboard-inset", `${h}px`);
        updateInset();
      } else {
        // iOS Native resizing animates the viewport itself; keep inset 0 to avoid double motion
        setVar("--keyboard-inset", "0px");
      }
    });

    const onDidShow = Keyboard.addListener("keyboardDidShow", () => {
      document.body.classList.remove("keyboard-anim");
    });

    const onWillHide = Keyboard.addListener("keyboardWillHide", () => {
      if (!isIOS) {
        document.body.classList.add("keyboard-anim");
        setVar("--keyboard-anim-duration", `250ms`);
        setVar("--keyboard-inset", "0px");
      }
    });

    const onDidHide = Keyboard.addListener("keyboardDidHide", () => {
      document.body.classList.remove("keyboard-open");
      document.body.classList.remove("keyboard-anim");
      setVar("--keyboard-anim-duration", `0ms`);
    });

    if (!isIOS) {
      visualViewport?.addEventListener("resize", onVVChange);
      visualViewport?.addEventListener("scroll", onVVChange);
    }

    return () => {
      onWillShow.remove();
      onDidShow.remove();
      onWillHide.remove();
      onDidHide.remove();
      if (rafId != null) cancelAnimationFrame(rafId);
      if (!isIOS) {
        visualViewport?.removeEventListener("resize", onVVChange);
        visualViewport?.removeEventListener("scroll", onVVChange);
      }
    };
  }, []);

  return null;
}

function makeQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({ onError: handleQueryError }),
    mutationCache: new MutationCache({ onError: handleMutationError }),
    defaultOptions: { queries: { retry: false } },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <KeyboardInsets />
      {children}
    </QueryClientProvider>
  );
}

// 중앙 집중 에러 핸들링 방식으로 구현
// 추후 에러 핸들링 로직 추가 예정

async function handleQueryError() {}

async function handleMutationError() {}

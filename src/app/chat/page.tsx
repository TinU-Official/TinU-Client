"use client";

import { ChatBottomSheet } from "@/components/Chat/ChatBottomSheet/ChatBottomSheet";
import { ChatScreen } from "@/components/Chat/ChatScreen/ChatScreen";
import { MoreButton } from "@/components/Chat/MoreButton/MoreButton";
import { ProductInfo } from "@/components/Chat/ProductInfo/ProductInfo";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import * as styles from "./chat.css";

import { useCallback, useEffect, useRef, useState } from "react";

const mock = {
  nickname: "test",
};

export interface ChatText {
  chatTextId: number;
  role: "sender" | "receiver";
  chatType: string;
  nickName: string;
  profileImg: string;
  time: string;
  context: string;
  notRead: number;
}

const mockChatList: ChatText[] = [
  {
    chatTextId: 1,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 2,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 3,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 4,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 5,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "인녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 6,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 7,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 8,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 9,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 10,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
];

export default function Chat() {
  const [chatList, setChatList] = useState(mockChatList);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [debugInfo, setDebugInfo] = useState<string>("");
  const stickyWrapperRef = useRef<HTMLDivElement>(null);
  const originalViewportHeight = useRef<number>(0); // 원래 viewport 높이 저장

  const handleSendChat = (chat: ChatText) => {
    setChatList((prev) => [...prev, chat]);
  };

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const closeBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false);
  }, []);

  useEffect(() => {
    // const handleVisualViewportResize = () => {
    //   if (window.visualViewport) {
    //     const info = `VisualViewport 변경됨:
    //       높이: ${window.visualViewport.height}
    //       너비: ${window.visualViewport.width}
    //       스케일: ${window.visualViewport.scale}
    //       offsetTop: ${window.visualViewport.offsetTop}
    //       offsetLeft: ${window.visualViewport.offsetLeft}`;

    //     console.log(info);
    //     setDebugInfo(info); // 화면에 표시

    //     // Header 위치도 함께 로깅
    //     const header = document.querySelector("header");
    //     if (header) {
    //       const rect = header.getBoundingClientRect();
    //       const headerInfo = `
    //         Header 위치:
    //         top: ${rect.top}
    //         left: ${rect.left}
    //         bottom: ${rect.bottom}
    //         right: ${rect.right}`;

    //       console.log(headerInfo);
    //       setDebugInfo((prev) => prev + "\n" + headerInfo);
    //     }
    //   }
    // };

    if (window.visualViewport) {
      originalViewportHeight.current = window.visualViewport.height;
    }

    const handleVisualViewportResize = () => {
      if (window.visualViewport && stickyWrapperRef.current) {
        const currentHeight = window.visualViewport.height;
        const originalHeight = originalViewportHeight.current;
        const heightDifference = originalHeight - currentHeight;

        const info = `VisualViewport 변경됨:
          원래 높이: ${originalHeight}px
          현재 높이: ${currentHeight}px
          높이 차이: ${heightDifference}px
          offsetTop: ${window.visualViewport.offsetTop}px`;

        console.log(info);
        setDebugInfo(info);

        // Header + ProductInfo를 함께 이동
        if (heightDifference > 0) {
          stickyWrapperRef.current.style.transform = `translateY(${heightDifference}px)`;

          const headerInfo = `
            Header + ProductInfo 함께 이동:
            transform: translateY(${heightDifference}px)`;

          setDebugInfo((prev) => prev + "\n" + headerInfo);
        } else {
          stickyWrapperRef.current.style.transform = "translateY(0px)";
          setDebugInfo((prev) => prev + "\nHeader + ProductInfo 위치 복원됨");
        }
      }
    };

    const handleVisualViewportScroll = () => {
      if (window.visualViewport) {
        console.log(" VisualViewport 스크롤:", {
          offsetTop: window.visualViewport.offsetTop,
          offsetLeft: window.visualViewport.offsetLeft,
        });
      }
    };

    // visualViewport 이벤트 리스너
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleVisualViewportResize);
      window.visualViewport.addEventListener("scroll", handleVisualViewportScroll);
    }

    // 일반 resize 이벤트도 함께 로깅
    const handleWindowResize = () => {
      console.log("🪟 Window resize:", {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
      });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleVisualViewportResize);
        window.visualViewport.removeEventListener("scroll", handleVisualViewportScroll);
      }
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={styles.chatPageWrapper}>
      {/* <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // 중앙 정렬
          backgroundColor: "rgba(0,0,0,0.9)",
          color: "white",
          padding: "15px",
          fontSize: "12px",
          zIndex: 9999,
          whiteSpace: "pre-line",
          maxWidth: "90vw", // 화면 너비의 90%
          maxHeight: "60vh", // 화면 높이의 60%
          overflow: "auto",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        {debugInfo || "디버그 정보가 여기에 표시됩니다..."}
      </div> */}
      {/* <Header
        ref={headerRef}
        isSticky
        left={<BackButton link="chat-list" />}
        center={<span className={styles.nickname}>{mock.nickname}</span>}
        right={<MoreButton />}
      />
      <ProductInfo /> */}
      <div ref={stickyWrapperRef} style={{ position: "relative" }}>
        <Header
          isSticky
          left={<BackButton link="chat-list" />}
          center={<span className={styles.nickname}>{mock.nickname}</span>}
          right={<MoreButton />}
        />
        <ProductInfo />
      </div>
      <ChatScreen chatList={chatList} closeBottomSheet={closeBottomSheet} />
      <ChatBottomSheet
        handleSendChat={handleSendChat}
        isBottomSheetOpen={isBottomSheetOpen}
        closeBottomSheet={closeBottomSheet}
        toggleBottomSheet={toggleBottomSheet}
      />
    </div>
  );
}

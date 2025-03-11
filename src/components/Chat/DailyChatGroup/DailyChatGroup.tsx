import { ReceiverChatBubble } from "../ReceiverChatBubble/ReceiverChatBubble";
import { SenderChatBubble } from "../SenderChatBubble/SenderChatBubble";
import * as styles from "./dailyChatGroup.css";

interface ChatText {
  chatTextId: number;
  role: "sender" | "receiver";
  chatType: string;
  nickName: string;
  profileImg: string;
  time: string;
  context: string;
  notRead: number;
}

const mockChatText: ChatText[] = [
  {
    chatTextId: 1,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 2,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
  {
    chatTextId: 3,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 4,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
  {
    chatTextId: 5,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 6,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
  {
    chatTextId: 7,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 8,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
  {
    chatTextId: 9,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 10,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
];

export function DailyChatGroup() {
  return (
    <div className={styles.dailyChatGroupWrapper}>
      <span className={styles.dateText}>2024년 10월 1일 (월)</span>
      <div className={styles.chatListWrapper}>
        {mockChatText.map((chatObj) => (
          <div key={chatObj.chatTextId} className={styles.chatBubbleWrapper({ role: chatObj.role })}>
            {chatObj?.role === "receiver" ? (
              <ReceiverChatBubble chatText={chatObj.context} profileImg={chatObj.profileImg} />
            ) : chatObj?.role === "sender" ? (
              <SenderChatBubble chatText={chatObj.context} />
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

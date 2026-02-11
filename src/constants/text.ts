import { IcGood, IcSad, IcSatisfied } from "@/assets/icons";

export const EMOJI_OPTIONS = [
  { id: "sad", label: "별로예요", Icon: IcSad },
  { id: "good", label: "좋아요", Icon: IcGood },
  { id: "satisfied", label: "만족해요", Icon: IcSatisfied },
];

export const REVIEW_QUESTIONS = [
  {
    id: "conversation",
    question: "대화는 어땠나요?",
    options: ["아쉬웠어요", "친절했어요"],
  },
  {
    id: "punctuality",
    question: "시간 약속은 잘 지켰나요?",
    options: ["못 지켰어요", "잘 지켰어요"],
  },
  {
    id: "responseSpeed",
    question: "답장 속도는 어땠나요?",
    options: ["느렸어요", "빨랐어요"],
  },
];

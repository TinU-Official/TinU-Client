"use client";

import { useState } from "react";

import * as styles from "./sign-up.css";
import { Terms } from "@/components/sign-up/Terms";
import { Email } from "@/components/sign-up/Email";
import { Info } from "@/components/sign-up/Info";
import { Univ } from "@/components/sign-up/Univ";
import Done from "@/components/sign-up/Done";

interface RegisterData {
  terms: {
    agree1: boolean;
    agree2: boolean;
    agree3: boolean;
  };
  email: string;
  profileImage: File | null;
  nickname: string;
  major: string;
  grade: string; // API 요청할 때 Number로 타입 변환 필요
}

type Step = "약관동의" | "이메일인증" | "정보입력" | "추가정보" | "가입완료";

export default function SignUpFunnel() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [registerData, setRegisterData] = useState<RegisterData>({
    terms: { agree1: false, agree2: false, agree3: false },
    email: "",
    profileImage: null,
    nickname: "",
    major: "",
    grade: "",
  });
  const [step, setStep] = useState<Step>("약관동의");

  return (
    <main className={styles.pageWrapper}>
      {(() => {
        switch (step) {
          case "약관동의":
            return (
              <Terms
                onNext={(terms) => {
                  setRegisterData((prev) => ({ ...prev, terms }));
                  setStep("이메일인증");
                }}
              />
            );
          case "이메일인증":
            return (
              <Email
                onNext={(email) => {
                  setRegisterData((prev) => ({ ...prev, email }));
                  setStep("정보입력");
                }}
              />
            );
          case "정보입력":
            return (
              <Info
                onNext={(nickname, profileImage) => {
                  setRegisterData((prev) => ({ ...prev, nickname, profileImage }));
                  setStep("추가정보");
                }}
              />
            );
          case "추가정보":
            return (
              <Univ
                onNext={(major, grade) => {
                  setRegisterData((prev) => ({ ...prev, major, grade }));
                  setStep("가입완료");
                  // API 요청 (스키마 미확정)
                }}
              />
            );
          case "가입완료":
            return <Done />;
        }
      })()}
    </main>
  );
}

import { Header } from "@/components/Common/Header/Header";
import { PropsWithChildren } from "react";
import { BackButton } from "@/components/Common/BackButton/BackButton";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header left={<BackButton />} />
      {children}
    </>
  );
}

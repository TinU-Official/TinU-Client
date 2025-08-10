import IcHamburger from "@/assets/icons/ic_hamburger.svg";
import ImgLogoSmall from "@/assets/imgs/img_logo_small.svg";
import { Header } from "@/components/Common/Header/Header";
import { IconButton } from "@/components/Common/IconButton";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        left={
          <Link href="/">
            <ImgLogoSmall />
          </Link>
        }
        right={<IconButton icon={<IcHamburger />} label="메뉴 열기" />}
        isSticky
      />
      {children}
    </>
  );
}

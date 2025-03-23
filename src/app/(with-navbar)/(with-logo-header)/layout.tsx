import { Header } from "@/components/Common/Header/Header";
import ImgLogoSmall from "@/assets/imgs/img_logo_small.svg";
import IcHamburger from "@/assets/icons/ic_hamburger.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        left={
          <button type="button">
            <ImgLogoSmall />
          </button>
        }
        right={
          <button type="button">
            <IcHamburger />
          </button>
        }
        isSticky
      />
      {children}
    </>
  );
}

import IcHamburger from "@/assets/icons/ic_hamburger.svg";
import ImgLogoSmall from "@/assets/imgs/img_logo_small.svg";
import { Header } from "@/components/Common/Header/Header";

export default function page() {
  return (
    <>
      <Header left={<ImgLogoSmall />} right={<IcHamburger />} />
    </>
  );
}

import { IcClose } from "@/assets/icons";
import { Header } from "@/components/Common/Header/Header";

export default function page() {
  return (
    <>
      <Header center="판매하기" right={<IcClose />} isSticky />
    </>
  );
}

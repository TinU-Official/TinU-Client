import { NavBar } from "@/components/Common/NavBar/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <NavBar />
    </>
  );
}

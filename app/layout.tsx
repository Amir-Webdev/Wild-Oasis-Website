import { ReactNode } from "react";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import "@/app/_styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "پناهگاه بکر",
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa">
      <body dir="rtl" className="font-[Vazirmatn]">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;

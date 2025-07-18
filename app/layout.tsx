import { ReactNode } from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "پناهگاه بکر",
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa">
      <body dir="rtl">
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

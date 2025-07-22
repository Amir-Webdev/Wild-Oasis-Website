import { ReactNode } from "react";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import "@/app/_styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: {
    template: "%s | پناهگاه بکر",
    default: "به پناهگاه بکر خوش آمدید",
  },
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa">
      <body
        dir="rtl"
        className="font-[Vazirmatn] bg-primary-950 text-primary-100 min-h-screen"
      >
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

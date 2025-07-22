import { ReactNode } from "react";
import "@/app/_styles/globals.css";
import { vazirmatn } from "./_fonts/Vazirmatn";
import Header from "./_components/Header";

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
        className={`${vazirmatn.className} bg-primary-950 text-primary-100 antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;

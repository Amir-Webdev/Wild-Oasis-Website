import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import { CabinType } from "../types";
import { getCabins } from "../lib/data-service";
import { toPersianNum } from "../lib/toPersianNum";

export const revalidate = 86400;

export const metadata = {
  title: "درباره ما",
};

async function Page() {
  const cabins: CabinType[] = await getCabins();
  const numOfCabins = cabins.length;

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          به پناهگاه بکر خوش آمدید
        </h1>

        <div className="space-y-8">
          <p>
            جایی که زیبایی طبیعت با راحتی زندگی به شکلی هماهنگ در هم می‌آمیزد.
            در قلب کوه‌های دولومیت ایتالیا پنهان شده، اینجا بهشتی دور از خانه
            برای شماست. اما فقط درباره‌ی کلبه‌های لوکس نیست — اینجا فرصتی‌ست
            برای پیوند دوباره با طبیعت و لذت بردن از سادگی در کنار خانواده.
          </p>
          <p>
            {toPersianNum(numOfCabins)} کلبه‌ی لوکس ما محیطی گرم و دنج فراهم
            می‌کنند، اما آرامش واقعی و حس رهایی را در دل کوه‌های اطراف خواهید
            یافت. در میان جنگل‌های سرسبز قدم بزنید، هوای تازه را عمیق نفس بکشید،
            و از گرمای آتش در دل شب یا وان آب‌گرم‌تان، به آسمانی پرستاره خیره
            شوید.
          </p>
          <p>
            اینجاست که لحظات ماندگار شکل می‌گیرند — در آغوش شکوه طبیعت. جایی
            برای آرام گرفتن، رها شدن از شتاب زندگی، و حس کردن شادی با هم بودن در
            محیطی زیبا.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          alt="خانواده در کنار هم دور آتش"
          className="rounded-lg"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          alt="خانواده مدیریت کننده پناهگاه بکر"
          className="rounded-lg object-cover"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          مدیریت‌شده توسط خانواده‌ی ما از سال ۱۹۶۲
        </h1>

        <div className="space-y-8">
          <p>
            از سال ۱۹۶۲، پناهگاه بکر به عنوان یک پناهگاه خانوادگی مورد علاقه
            شناخته می‌شود. این مکان توسط پدربزرگ و مادربزرگ‌مان بنیان‌گذاری شد و
            با عشق و توجهی که نسل‌به‌نسل منتقل شده، همچنان توسط خانواده‌ی ما
            اداره می‌شود. گواهی بر تعهدمان به ایجاد محیطی گرم و صمیمی.
          </p>
          <p>
            در طول این سال‌ها، ما جوهره‌ی پناهگاه بکر را حفظ کرده‌ایم — ترکیبی
            از زیبایی بی‌زمان کوه‌ها و لمس شخصی که تنها یک کسب‌و‌کار خانوادگی
            می‌تواند ارائه دهد. اینجا، شما فقط یک مهمان نیستید؛ بلکه بخشی از
            خانواده‌ی بزرگ ما هستید. پس به‌زودی به پناهگاه بکر بپیوندید — جایی
            که سنت با آرامش در هم آمیخته و هر سفر مانند بازگشت به خانه است.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 rounded-3xl text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              کشف کلبه‌های لوکس ما
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

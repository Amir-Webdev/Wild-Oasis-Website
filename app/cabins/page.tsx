import CabinCard from "@/app/components/CabinCard";
import { CabinType } from "../types";
import { getCabins } from "../lib/data-service";

export const metadata = {
  title: "کابین ها",
};

async function Page() {
  const cabins: CabinType[] = await getCabins();

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        کابین های لاکچری ما
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        حتی در دل کوه‌های آلپ ایتالیا، کلبه‌هایی دنج و در عین حال لوکس منتظر شما
        هستند. تصور کنید صبح را با منظره‌ای از کوه‌های باشکوه آغاز می‌کنید،
        روزتان را با گشت‌وگذار در جنگل‌های تاریک اطراف می‌گذرانید، یا شب را در
        وان آب‌گرم خصوصی‌تان زیر آسمان پرستاره سپری می‌کنید. از زیبایی‌های طبیعت
        در خانه‌ی کوچک و دنج خود لذت ببرید — مکانی ایده‌آل برای تعطیلاتی آرام و
        دل‌نشین. به بهشت خوش آمدید.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;

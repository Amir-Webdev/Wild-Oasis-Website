import { getCabin } from "@/app/lib/data-service";
import { toPersianNum } from "@/app/lib/toPersianNum";
import { CabinType } from "@/app/types";
import Image from "next/image";
import {
  HiOutlineEyeSlash,
  HiOutlineMapPin,
  HiOutlineUsers,
} from "react-icons/hi2";

type PagePropTypes = {
  params: { cabinId: string };
};

export async function generateMetadata({ params }: PagePropTypes) {
  const { name } = await getCabin(Number(params.cabinId));

  return {
    title: `کلبه ${name}`,
  };
}

async function Page({ params }: PagePropTypes) {
  const cabinId: number = Number(params.cabinId);
  const cabin: CabinType = await getCabin(cabinId);

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[254px] bg-primary-950 p-6 pb-1 w-[150%]">
            کلبه {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">{description}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <HiOutlineUsers className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                تا{" "}
                <span className="font-bold">{toPersianNum(maxCapacity)}</span>{" "}
                مهمان
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <HiOutlineMapPin className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                واقع در قلب منطقه <span className="font-bold">دولومیتس</span>{" "}
                (ایتالیا)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <HiOutlineEyeSlash className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                حریم <span className="font-bold">{toPersianNum(100)}%</span>{" "}
                خصوصی
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          الان رزرو کنید. وقتی رسیدید پرداخت کنید.
        </h2>
      </div>
    </div>
  );
}

export default Page;

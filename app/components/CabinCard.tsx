import { HiOutlineUsers } from "react-icons/hi2";
import Image from "next/image";
import { CabinType } from "../types";
import Link from "next/link";

type CabinCardPropTypes = {
  cabin: CabinType;
};

function CabinCard({ cabin }: CabinCardPropTypes) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border rounded-xl">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800 rounded-r-xl"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            کابین {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <HiOutlineUsers className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              تا <span className="font-bold">{maxCapacity}</span> نفر
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  تومان {regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  تومان {regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">تومان {regularPrice}</span>
            )}
            <span className="text-primary-200">/ شب</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            اطلاعات و رزرو &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;

"use client";

import { HiOutlineExclamationCircle } from "react-icons/hi2";

function Error({ error }: { error: Error }) {
  return (
    <div className="h-full grid items-center justify-center">
      <h2 className="text-red-500 text-xl border border-red-500 rounded-xl flex items-center gap-6 py-6 px-10">
        <HiOutlineExclamationCircle size={56} />
        <span className="flex flex-col items-start gap-3">
          <p>خطایی رخ داد. لطفا مجددا تلاش کنید.</p>
          <p>پیام خطا: {error.message}</p>
        </span>
      </h2>
    </div>
  );
}

export default Error;

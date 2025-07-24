"use client";

type ErrorPropTypes = { error: Error; reset: () => void };

function Error({ error, reset }: ErrorPropTypes) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">مشکلی پیش آمد.</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        تلاش مجدد
      </button>
    </main>
  );
}

export default Error;

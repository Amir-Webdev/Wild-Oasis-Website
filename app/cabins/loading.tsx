import Spinner from "../components/Spinner";

function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">در حال بارگذاری کابین ها...</p>
    </div>
  );
}

export default Loading;

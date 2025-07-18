import Link from "next/link";
import Navigation from "./components/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <h1>پناهگاه بکر. مکانی برای آرامش شما</h1>
      <Link href="/cabins">مشاهده کابین ها</Link>
    </>
  );
}

export default Home;

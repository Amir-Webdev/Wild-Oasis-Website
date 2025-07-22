import Link from "next/link";

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">خانه</Link>
      </li>
      <li>
        <Link href="/cabins">کابین ها</Link>
      </li>
      <li>
        <Link href="/about">درباره پناهگاه بکر</Link>
      </li>
      <li>
        <Link href="/account">حساب کاربری</Link>
      </li>
    </ul>
  );
}

export default Navigation;

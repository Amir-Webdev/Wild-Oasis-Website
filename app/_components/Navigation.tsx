import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-lg">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            کابین ها
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            درباره ما
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            حساب کاربری
          </Link>
        </li>
      </ul>
    </nav>
  );
}

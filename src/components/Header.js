import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { isDarkState } from "atoms/isDarkAtom";
import { modalState } from "atoms/modalAtom";
import { Link, useRouter } from "react-location";
import { useRecoilState } from "recoil";
import Dropdown from "./Dropdown";
import FreeButton from "./FreeButton";

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const [open, setOpen] = useRecoilState(modalState);
  const { state: { location: { pathname }, },} = useRouter();

  const name =
    pathname === "/team/chris"
      ? "chris"
      : pathname === "/team/jessee"
      ? "jessee"
      : pathname === "/team/george"
      ? "george"
      : null;

  return (
    <header className="header">
      <nav className="nav">
        {/* Left Side */}
        <div>
          <Link to="/">
            <span
              className={`navLogo ${
                pathname === "/" && "navLogoActive dark:text-transparent"
              }`}
            >
              BLUGENIX
            </span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex justify-evenly items-end">
          <div className="flex items-center space-x-3 md:hidden">
            {isDark ? (
              <SunIcon
              onClick={() => setIsDark(!isDark)}
                className="navSunIcon mt-1 animate-pulse"
              />
            ) : (
              <MoonIcon
              onClick={() => setIsDark(!isDark)}
                className="navMoonIcon mt-1 animate-pulse"
              />
            )}

            <Dropdown />
          </div>

          <ul className="hidden md:flex items-center space-x-5">
            {isDark ? (
              <SunIcon
                onClick={() => setIsDark(!isDark)}
                className="navSunIcon hidden md:flex animate-pulse"
              />
            ) : (
              <MoonIcon
              onClick={() => setIsDark(!isDark)}
                className="navMoonIcon hidden md:flex animate-pulse"
              />
            )}{" "}
            <li
              className={`navLink ${
                pathname === "/therapies" && "text-blue-600 dark:text-blue-600"
              }`}
            >
              <Link to="/therapies">therapies</Link>
            </li>
            <li
              className={`navLink ${
                (pathname === "/team") | (pathname === `/team/${name}`) &&
                "text-blue-600 dark:text-blue-600"
              }`}
            >
              <Link to="/team">team</Link>
            </li>
            <li
              className={`navLink ${
                pathname === "/forms" && "text-blue-600 dark:text-blue-600"
              }`}
            >
              <Link to="/forms">forms</Link>
            </li>
          </ul>
          <a
            className="navTel text-gray-100 will-change-scroll via-top-0"
            href="tel:+5617776077"
          >
            561-777-6077
          </a>

          <FreeButton
            description="Free Consultation"
            style_1="navBtn hidden md:inline-block"
            style_2="text-gray-100"
            onClick={() => setOpen(true)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { Link, useRouter } from "react-location";
import Dropdown from "./Dropdown";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import useStore from "store";

const Header = () => {
  const toggleTheme = useStore((s) => s.toggleTheme);
  const isDarkTheme = useStore((s) => s.isDarkTheme);
  const {
    state: {
      location: { pathname },
    },
  } = useRouter();

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
            {isDarkTheme ? (
              <SunIcon onClick={toggleTheme} className="navSunIcon mt-1" />
            ) : (
              <MoonIcon onClick={toggleTheme} className="navMoonIcon mt-1" />
            )}

            <Dropdown />
          </div>

          <ul className="hidden md:flex items-center space-x-5">
            {isDarkTheme ? (
              <SunIcon
                onClick={toggleTheme}
                className="navSunIcon hidden md:flex"
              />
            ) : (
              <MoonIcon
                onClick={toggleTheme}
                className="navMoonIcon hidden md:flex"
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
          <div className="navBtn">
            <button className="text-gray-100 text-xl md:text-base">Free Consultation</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

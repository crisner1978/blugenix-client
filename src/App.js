import { isDarkState } from "atoms/isDarkAtom";
import Footer from "components/Footer";
import Header from "components/Header";
import Modal from "components/Modal";
import useDarkTheme from "lib/useDarkTheme";
import { Outlet, Router } from "react-location";
import { ReactLocationDevtools } from "react-location-devtools";
import { useRecoilState } from "recoil";
import { location, routes } from "router";

const App = () => {
  const [theme, toggleTheme] = useDarkTheme();
  // const theme = (isDark) => (isDark ? "dark" : "light");
  console.log(theme)
  return (
    <Router routes={routes} location={location}>
      <div className={`${theme}`}>
        <div className="min-h-screen bg-gray-100 dark:bg-black dark:text-gray-200 text-gray-700 font-deca">
          <Header />
          <Outlet />
          <ReactLocationDevtools initialIsOpen={false} />
          <Footer />
          <Modal theme={theme} />
        </div>
      </div>
    </Router>
  );
};

export default App;

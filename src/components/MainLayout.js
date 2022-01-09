import { Outlet, Router } from "react-location";
import { location, routes } from "router";
import Footer from "./Footer";
import Header from "./Header";
import "./MainLayout.css"


const MainLayout = () => {
  return (
    <Router routes={routes} location={location}>
      <div className="mainLayout">
        <Header />
        <div className="mainLayout__page">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default MainLayout;

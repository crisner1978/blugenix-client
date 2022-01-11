import { Outlet, Router } from "react-location";
import { ReactLocationDevtools } from "react-location-devtools";
import { location, routes } from "router";
import Footer from "./Footer";
import Header from "./Header";


const MainLayout = () => {
  
  return (
    <Router routes={routes} location={location}>
      <div className="">
        <Header />
        <div className="font-fancy">
          <Outlet />
          <ReactLocationDevtools initialIsOpen={false}/>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default MainLayout;

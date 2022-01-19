import Footer from "components/Footer";
import Header from "components/Header";
import Modal from "components/Modal";
import useDarkTheme from "lib/useDarkTheme";
import { Outlet, Router } from "react-location";
import { ReactLocationDevtools } from "react-location-devtools";
import { location, routes } from "router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
  const [theme] = useDarkTheme();
  const queryClient = new QueryClient()
  // const theme = (isDark) => (isDark ? "dark" : "light");
  console.log(theme)
  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
      <div className={`${theme}`}>
        <div className="min-h-screen bg-gray-100 dark:bg-black dark:text-gray-200 text-gray-700 font-deca">
          <Header />
          <Outlet />
          <ReactLocationDevtools initialIsOpen={false} />
          <ReactQueryDevtools />
          <Footer />
          <Modal theme={theme} />
        </div>
      </div>
    </Router>
    </QueryClientProvider>
    
  );
};

export default App;

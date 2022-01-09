import { HomePage, TeamPage } from "pages";
import { ReactLocation } from "react-location";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
      path: "team",
      element: <TeamPage />,
  }
];

export const location = new ReactLocation()

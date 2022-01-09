import { HomePage, TeamPage } from "pages";
import TeamMate from "pages/TeamMate";
import { ReactLocation } from "react-location";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "team",
    element: <TeamPage />,
    children: [{ path: ":name", element: <TeamMate /> }],
  },
];

export const location = new ReactLocation();

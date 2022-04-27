import FormsPage from "pages/form";
import HomePage from "pages/home";
import { TeamIndex, TeamMate, TeamPage } from "pages/team";
import { TherapiesPage, TherapyIndex, TherapyName } from "pages/therapy";
import { ReactLocation } from "react-location";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "therapies",
    element: <TherapiesPage />,
    children: [
      { path: "/", element: <TherapyIndex /> },
      { path: ":name", element: <TherapyName /> },
    ],
  },
  {
    path: "team",
    element: <TeamPage />,
    children: [
      { path: "/", element: <TeamIndex /> },
      { path: ":name", element: <TeamMate /> },
    ],
  },
  {
    path: "forms",
    element: <FormsPage />,
  },
];

export const location = new ReactLocation();

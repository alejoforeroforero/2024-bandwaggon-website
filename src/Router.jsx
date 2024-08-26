import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "@/pages/HomePage";
import Manifesto from "./pages/Manifesto";
import HowItWorks from "./pages/HowItWorks";
import Artist from "./pages/Artist";
import MusicBusiness from "./pages/MusicBusiness";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/manifesto",
        element: <Manifesto />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/artist",
        element: <Artist />,
      },
      {
        path: "/music-business",
        element: <MusicBusiness />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

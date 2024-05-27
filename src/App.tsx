import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Home } from "./components/navmenu/Home";
import { Coaching } from "./components/navmenu/Coaching";
import { Contact } from "./components/navmenu/Contact";
import { Achievements } from "./components/navmenu/Achievements";
import { Impressum } from "./components/navmenu/Impressum";

export function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/coaching",
      element: <Coaching />,
    },
    {
      path: "/achievements",
      element: <Achievements />,
    },
    {
      path: "/impressum",
      element: <Impressum />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

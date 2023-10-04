/* import { createBrowserRouter } from "react-router-dom"; */
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx";

export const routesArray = [
    {
      path: "/",
      element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    /* {
        path: "/logement/:id",
        element: <Logement />
    }, */
    {
        path: "*",
        element: <Home />
    }
  ];

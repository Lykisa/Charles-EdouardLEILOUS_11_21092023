import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx";
import Logement from "./pages/Logement.jsx"
import Layout from "./components/Layout/Layout.jsx";
import Error404 from "./components/Error404/Error404.jsx";

export const routesArray = [
    {
        path: "",
        element: <Layout />,
        children: [
            {
              path: "/",
              element: 
                    <Home />
            },
            {
                path: "/about",
                element: 
                    <About />
            },
            {
                path: "/logement/:id",
                element: 
                    <Logement />
            },
            {
                path: "*",
                element: 
                    <Error404 />
            }
        ]
    }
  ];
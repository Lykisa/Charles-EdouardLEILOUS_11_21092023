import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      <Footer />
  </React.StrictMode>
);
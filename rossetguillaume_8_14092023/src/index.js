import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import LogementPage from "./views/LogementPage/LogementPage";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import Error from "./views/Error/Error";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/logements/:id" element={<LogementPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

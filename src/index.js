import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/home";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();

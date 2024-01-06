import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

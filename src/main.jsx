import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  // Global AOS configuration options
  // For example:
  // offset: 100,
  // duration: 500,
  // easing: 'ease-in-out',
  // delay: 100,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

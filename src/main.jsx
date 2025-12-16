import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";
import "./css/global.css";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./components/ScrolltoTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/aarhus_comedy_club"}>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);

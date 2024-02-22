import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes.jsx";
import { ThemeProvider } from "./Theme.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

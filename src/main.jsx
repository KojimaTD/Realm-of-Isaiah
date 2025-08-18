import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import VisitorProvider from "./lib/VisitorProvider";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisitorProvider>
      <App />
    </VisitorProvider>
  </React.StrictMode>
);

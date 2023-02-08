import React from "react";
import ReactDOM from "react-dom/client";

//Estilo Global
import "./index.css";

//Router importado
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

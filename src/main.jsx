import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

//Estilo Global
import "./index.css";

//Router importado
import Router from "./router";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./JS/Store/index";
import App from "./App";
import "./App.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

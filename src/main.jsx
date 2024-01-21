import { invoke } from "@tauri-apps/api";
import "normalize.css";
import React from "react";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRoutes from "./routes";

document.addEventListener("DOMContentLoaded", () => {
  invoke("close-splashscreen");
});

const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <AppRoutes />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);

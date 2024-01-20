import { invoke } from "@tauri-apps/api";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";

document.addEventListener('DOMContentLoaded', () => {
  invoke('close-splashscreen')
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);

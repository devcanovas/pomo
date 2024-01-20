import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css"
import { invoke } from "@tauri-apps/api";

document.addEventListener('DOMContentLoaded', () => {
  invoke('close-splashscreen')
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

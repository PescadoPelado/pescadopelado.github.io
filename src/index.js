import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/Contact.css";
import "./css/SideBar.css";
import "./css/NavigationBar.css";
import "./css/About.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

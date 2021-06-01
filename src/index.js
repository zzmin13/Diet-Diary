import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./common/reset.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/authService";
import Database from "./service/database";

const authService = new AuthService();
const database = new Database();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} database={database} />
  </React.StrictMode>,
  document.getElementById("root")
);

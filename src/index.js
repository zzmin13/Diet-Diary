import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./common/reset.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/authService";
import Database from "./service/database";
import FoodSearch from "./service/foodSearch";

const authService = new AuthService();
const database = new Database();
const foodSearch = new FoodSearch(process.env.REACT_APP_SERVICE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      database={database}
      foodSearch={foodSearch}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

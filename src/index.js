import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./common/reset.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/authService";
import Database from "./service/database";
import FoodSearch from "./service/foodSearch";
import { createStore } from "redux";
import rootReducer from "./modules/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const authService = new AuthService();
const database = new Database();
const foodSearch = new FoodSearch(process.env.REACT_APP_SERVICE_KEY);
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        authService={authService}
        database={database}
        foodSearch={foodSearch}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

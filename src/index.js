import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./common/reset.css";
import AppContainer from "./containers/app_container";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/authService";
import Database from "./service/database";
import FoodSearch from "./service/foodSearch";
import { createStore } from "redux";
import rootReducer from "./modules/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ImageUploader from "./service/imageUploader";

const authService = new AuthService();
const database = new Database();
const foodSearch = new FoodSearch(process.env.REACT_APP_SERVICE_KEY);
const imageUploader = new ImageUploader();
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer
        authService={authService}
        database={database}
        foodSearch={foodSearch}
        imageUploader={imageUploader}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

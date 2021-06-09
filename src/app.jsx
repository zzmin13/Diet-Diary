import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer/footer";
import Home from "./routes/home/home";
import HomeContainer from "./containers/home_container";
import Login from "./routes/login/login";
import Join from "./routes/join/join";
import Main from "./routes/main/main";
import Register from "./routes/register/register";
import LoginHeader from "./components/loginHeader/loginHeader";
import LogoutHeader from "./components/logout_header/logout_header";
import Diary from "./routes/diary/diary";
import Diet from "./routes/diet/diet";
import Exercise from "./routes/exercise/exercise";
import Water from "./routes/water/water";
import Goal from "./routes/goal/goal";
import HeaderContainer from "./containers/header_container";

function App({ authService, database, foodSearch }) {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer authService={authService} database={database} />
        <Route
          path={["/", "/home"]}
          exact={true}
          render={(props) => {
            return (
              <>
                <HomeContainer authService={authService} {...props} />
              </>
            );
          }}
        />
        <Route
          path="/login"
          exact={true}
          render={(props) => {
            return (
              <>
                <Login
                  authService={authService}
                  database={database}
                  {...props}
                />
              </>
            );
          }}
        />
        <Route
          path="/join"
          exact={true}
          render={(props) => {
            return (
              <>
                <Join
                  authService={authService}
                  database={database}
                  {...props}
                />
              </>
            );
          }}
        />
        <Route
          path="/main"
          exact={true}
          render={(props) => {
            return (
              <>
                {/* <LoginHeader authService={authService} database={database} /> */}
                <Main
                  authService={authService}
                  database={database}
                  {...props}
                />
              </>
            );
          }}
        />
        <Route
          path="/register"
          exact={true}
          render={(props) => {
            return (
              <>
                <Register
                  authService={authService}
                  database={database}
                  {...props}
                />
              </>
            );
          }}
        />
        <Route
          path="/diary"
          exact={true}
          render={(props) => {
            return (
              <>
                <Diary
                  authService={authService}
                  database={database}
                  {...props}
                />
              </>
            );
          }}
        />
        <Route
          path="/diet"
          exact={true}
          render={(props) => {
            return (
              <>
                <Diet
                  authService={authService}
                  database={database}
                  foodSearch={foodSearch}
                  {...props}
                />
              </>
            );
          }}
        />
        <Route
          path="/exercise"
          exact={true}
          render={(props) => {
            return (
              <>
                <Exercise
                  authService={authService}
                  database={database}
                  {...props}
                />
              </>
            );
          }}
        />
        <Route
          path="/water"
          exact={true}
          render={(props) => {
            return (
              <>
                <Water
                  authService={authService}
                  database={database}
                  {...props}
                />
              </>
            );
          }}
        />
        <Route
          path="/goal"
          exact={true}
          render={(props) => {
            return (
              <>
                <Goal
                  authService={authService}
                  database={database}
                  {...props}
                />
              </>
            );
          }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;

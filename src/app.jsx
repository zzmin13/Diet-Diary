import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import Join from "./routes/join/join";
import Main from "./routes/main/main";
import Register from "./routes/register/register";
import LoginHeader from "./components/loginHeader/loginHeader";
import Diary from "./routes/diary/diary";
import Diet from "./routes/diet/diet";
import Exercise from "./routes/exercise/exercise";
import Water from "./routes/water/water";
import Goal from "./routes/goal/goal";

function App({ authService, database }) {
  return (
    <>
      <BrowserRouter>
        <Route
          path={["/", "/home"]}
          exact={true}
          render={(props) => {
            return (
              <>
                <Header authService={authService} database={database} />
                <Home authService={authService} {...props} />
                <Footer />
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
                <Header authService={authService} database={database} />
                <Login
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
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
                <Header authService={authService} database={database} />
                <Join
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
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
                <LoginHeader authService={authService} database={database} />
                <Main
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
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
                <LoginHeader authService={authService} database={database} />
                <Register
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
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
                <LoginHeader authService={authService} database={database} />
                <Diary
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
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
                <LoginHeader authService={authService} database={database} />
                <Diet
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
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
                <LoginHeader authService={authService} database={database} />
                <Exercise
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
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
                <LoginHeader authService={authService} database={database} />
                <Water
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
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
                <LoginHeader authService={authService} database={database} />
                <Goal
                  authService={authService}
                  database={database}
                  {...props}
                />
                <Footer />
              </>
            );
          }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/home_container";
import Login from "./routes/login/login";
import Join from "./routes/join/join";
import MainContainer from "./containers/main_container";
import RegisterContainer from "./containers/register_contatiner";
import Diary from "./routes/diary/diary";
import Diet from "./routes/diet/diet";
import Exercise from "./routes/exercise/exercise";
import Water from "./routes/water/water";
import Goal from "./routes/goal/goal";
import HeaderContainer from "./containers/header_container";
import NavbarContainer from "./containers/navbar_container";
import { useEffect } from "react";
import styles from "./app.module.css";

function App({
  authService,
  database,
  foodSearch,
  loginUser,
  loadUserInformation,
}) {
  console.log(`App`);
  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (USER) {
        loginUser(USER);
        database.getUserData(USER.uid).then((response) => {
          if (response === false) {
            window.location.reload();
          } else {
            loadUserInformation(response);
          }
        });
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <HeaderContainer authService={authService} database={database} />
        <NavbarContainer />
        <div className={styles.body_container}>
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
                  <MainContainer
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
                  <RegisterContainer
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
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

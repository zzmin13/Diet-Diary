import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/home_container";
import Login from "./routes/login/login";
import Join from "./routes/join/join";
import MainContainer from "./containers/main_container";
import RegisterContainer from "./containers/register_contatiner";
import DiaryContainer from "./containers/diary_container";
import DietContainer from "./containers/diet_container";
import DietAddContainer from "./containers/diet_add_container";
import ExerciseContainer from "./containers/exercise_container";
import WaterContainer from "./containers/water_container";
import WaterAddContainer from "./containers/water_add_container";
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
                  <DiaryContainer
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
                  <DietContainer
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
            path="/diet/add"
            exact={true}
            render={(props) => {
              return (
                <>
                  <DietAddContainer
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
                  <ExerciseContainer
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
                  <WaterContainer
                    authService={authService}
                    database={database}
                    {...props}
                  />
                </>
              );
            }}
          />
          <Route
            path="/water/add"
            exact={true}
            render={(props) => {
              return (
                <>
                  <WaterAddContainer
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

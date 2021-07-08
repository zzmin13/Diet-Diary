import { HashRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/home_container";
import Login from "./routes/login/login";
import Join from "./routes/join/join";
import Find from "./routes/find/find";
import FindSent from "./routes/find_sent/find_sent";
import MainContainer from "./containers/main_container";
import RegisterContainer from "./containers/register_contatiner";
import DiaryContainer from "./containers/diary_container";
import DietContainer from "./containers/diet_container";
import DietSearchContainer from "./containers/diet_search_container";
import DietDirectlyContainer from "./containers/diet_directly_container";
import DietEditContainer from "./containers/diet_edit_container";
import ExerciseContainer from "./containers/exercise_container";
import ExerciseSearchContainer from "./containers/exercise_search_container";
import ExerciseDirectlyContainer from "./containers/exercise_directly_container";
import ExerciseEditContainer from "./containers/exercise_edit_container";
import WaterContainer from "./containers/water_container";
import WaterAddContainer from "./containers/water_add_container";
import WaterEditContainer from "./containers/water_edit_container";
import HeaderContainer from "./containers/header_container";
import NavbarContainer from "./containers/navbar_container";
import WeightContainer from "./containers/weight_container";
import MypageAccountContainer from "./containers/mypage_account_container";
import MypageContainer from "./containers/mypage_container";
import MypageHealthContainer from "./containers/mypage_health_container";
import ChangePasswordContainer from "./containers/change_password_container";
import WithdrawalContainer from "./containers/withdrawal_container";
import WithdrawalDone from "./routes/withdrawal_done/withdrawal_done";

import { useEffect } from "react";
import styles from "./app.module.css";

function App({
  authService,
  database,
  foodSearch,
  imageUploader,
  loginUser,
  loadUserInformation,
}) {
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
  }, [authService, database, loadUserInformation, loginUser]);
  return (
    <>
      <HashRouter>
        <HeaderContainer authService={authService} database={database} />
        <NavbarContainer />
        <div className={styles.body_container}>
          <Route
            path={["/", "/home"]}
            exact={true}
            render={(props) => {
              return (
                <>
                  <HomeContainer
                    authService={authService}
                    database={database}
                    {...props}
                  />
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
            path="/find"
            exact={true}
            render={(props) => {
              return (
                <>
                  <Find authService={authService} {...props} />
                </>
              );
            }}
          />
          <Route
            path="/find/sent"
            exact={true}
            render={(props) => {
              return (
                <>
                  <FindSent {...props} />
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
            path="/diet/edit/:id"
            exact={true}
            render={(props) => {
              return (
                <DietEditContainer
                  authService={authService}
                  database={database}
                  foodSearch={foodSearch}
                  {...props}
                />
              );
            }}
          />
          <Route
            path="/diet/search"
            exact={true}
            render={(props) => {
              return (
                <>
                  <DietSearchContainer
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
            path="/diet/directly"
            exact={true}
            render={(props) => {
              return (
                <>
                  <DietDirectlyContainer
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
            path="/exercise/search"
            exact={true}
            render={(props) => {
              return (
                <>
                  <ExerciseSearchContainer
                    authService={authService}
                    database={database}
                    {...props}
                  />
                </>
              );
            }}
          />
          <Route
            path="/exercise/directly"
            exact={true}
            render={(props) => {
              return (
                <>
                  <ExerciseDirectlyContainer
                    authService={authService}
                    database={database}
                    {...props}
                  />
                </>
              );
            }}
          />
          <Route
            path="/exercise/edit/:id"
            exact={true}
            render={(props) => {
              return (
                <>
                  <ExerciseEditContainer
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
          <Route
            path="/water/edit"
            exact={true}
            render={(props) => {
              return (
                <>
                  <WaterEditContainer
                    authService={authService}
                    database={database}
                    {...props}
                  />
                </>
              );
            }}
          />
          <Route
            path="/weight"
            exact={true}
            render={(props) => {
              return (
                <>
                  <WeightContainer database={database} {...props} />
                </>
              );
            }}
          />
          <Route
            path="/mypage"
            exact={true}
            render={(props) => {
              return (
                <>
                  <MypageContainer
                    authService={authService}
                    database={database}
                    {...props}
                  />
                </>
              );
            }}
          />
          <Route
            path="/mypage/account"
            exact={true}
            render={(props) => {
              return (
                <>
                  <MypageAccountContainer
                    authService={authService}
                    database={database}
                    imageUploader={imageUploader}
                    {...props}
                  />
                </>
              );
            }}
          />
          <Route
            path="/mypage/health"
            exact={true}
            render={(props) => {
              return (
                <>
                  <MypageHealthContainer database={database} {...props} />
                </>
              );
            }}
          />
          <Route
            path="/mypage/changepassword"
            exact={true}
            render={(props) => {
              return (
                <>
                  <ChangePasswordContainer
                    authService={authService}
                    database={database}
                    {...props}
                  />
                </>
              );
            }}
          />
          <Route
            path="/mypage/withdrawal"
            exact={true}
            render={(props) => {
              return (
                <>
                  <WithdrawalContainer
                    authService={authService}
                    database={database}
                    {...props}
                  />
                </>
              );
            }}
          />
          <Route
            path="/mypage/withdrawal/done"
            exact={true}
            render={(props) => {
              return (
                <>
                  <WithdrawalDone {...props} />
                </>
              );
            }}
          />
        </div>
      </HashRouter>
    </>
  );
}

export default App;

import React, { useEffect } from "react";

const Main = (props) => {
  const { authService, database, history, user, logoutUser } = props;
  console.log(props);

  const currentYear = `${new Date().getFullYear()}`;
  const currentMonth =
    new Date().getMonth() + 1 < 10
      ? `0${new Date().getMonth() + 1}`
      : `${new Date().getMonth() + 1}`;
  const currentDate =
    new Date().getDate() < 10
      ? `0${new Date().getDate()}`
      : `${new Date().getDate()}`;
  const current = currentYear + currentMonth + currentDate;

  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (USER) {
        try {
          database.getUserData(USER.uid).then((response) => {
            if (response === false) {
              window.location.reload();
            } else {
              if (response.information.required === undefined) {
                // 필수 정보가 없으면 /register로 이동
                history.push("/register");
              } else {
                if (response.userDiary[current] === undefined) {
                  // 오늘 날짜 일기가 없으면 오늘날짜로 템플릿을 만듬
                  database.setTodayDiaryTemplate(USER.uid, current);
                }
              }
              // setLoginUser({
              //   ...response,
              //   uid: USER.uid,
              // });
            }
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        logoutUser();
        console.log(`user: ${user}`);
        history.push("/");
      }
    });
    // return () => {
    //   setLoginUser();
    // };
  }, []);
  return <h1>Main!!</h1>;
};

export default Main;

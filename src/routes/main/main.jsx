import React, { memo, useEffect, useState } from "react";
import styles from "./main.module.css";
const Main = memo((props) => {
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
  console.log(current);

  const { authService, database, history } = props;
  const [loginUser, setLoginUser] = useState();
  const [today, setToday] = useState();
  const [requiredInformation, setRequiredInformation] = useState();
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setLoginUser({
          name: user.displayName,
          userid: user.uid,
          email: user.email,
        });
      } else {
        history.push("/");
      }
    });
    return () => {
      setLoginUser();
    };
  }, [authService, history]);
  useEffect(() => {
    if (loginUser) {
      try {
        database.getUserData(loginUser.userid).then((response) => {
          console.log(response);
          if (response === false) {
            window.location.reload();
          } else {
            if (response.information.required === undefined) {
              // 필수 정보가 없으면 /register로 이동
              history.push("/register");
            } else {
              // 필수 정보가 있으면 state에 담음
              setRequiredInformation({
                weight: response.information.required.weight,
                recommendedCalories: Math.round(
                  response.information.required.recommendedCalories
                ),
              });
              if (response.diary === undefined) {
                console.log(`오늘 날짜 일기가 없음`);
              } else {
                console.log(`오늘 날짜 일기가 있음`);
              }
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [loginUser]);
  const goDiaryPage = () => {
    history.push({
      pathname: "/diary",
      state: {
        uid: loginUser.userid,
      },
    });
  };
  const goDietPage = () => {
    history.push({
      pathname: "/diet",
      state: {
        uid: loginUser.userid,
      },
    });
  };
  const goWaterPage = () => {
    history.push({
      pathname: "/water",
      state: {
        uid: loginUser.userid,
      },
    });
  };
  const goExercisePage = () => {
    history.push({
      pathname: "/exercise",
      state: {
        uid: loginUser.userid,
      },
    });
  };
  const goGoalPage = () => {
    history.push({
      pathname: "/goal",
      state: {
        uid: loginUser.userid,
      },
    });
  };
  return (
    <>
      {loginUser && requiredInformation ? (
        <div className={styles.container}>
          <h1>{`반갑습니다. ${loginUser.name}님!`}</h1>
          <h1>{`현재 몸무게 : ${requiredInformation.weight}`}</h1>
          <h1>{`목표 몸무게 : `}</h1>
          <h1>{`하루 권장 칼로리 : ${requiredInformation.recommendedCalories}`}</h1>
          <button onClick={goDiaryPage}>일기 작성하기</button>
          <button onClick={goDietPage}>식사 입력하기</button>
          <button onClick={goWaterPage}>물 입력하기</button>
          <button onClick={goExercisePage}>운동 기록하기</button>
          <button onClick={goGoalPage}>목표 몸무게 등록하기</button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
});

export default Main;

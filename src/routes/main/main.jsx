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

  const { authService, database, history } = props;
  const [loginUser, setLoginUser] = useState({
    information: {
      basic: {
        avatar: "",
        email: "",
        userName: "",
      },
      required: {
        recommendedCalories: "",
        weight: "",
      },
    },
    userDiary: "",
  });

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        try {
          database.getUserData(user.uid).then((response) => {
            if (response === false) {
              window.location.reload();
            } else {
              if (response.information.required === undefined) {
                // 필수 정보가 없으면 /register로 이동
                history.push("/register");
              } else {
                if (response.userDiary[current] === undefined) {
                  // 오늘 날짜 일기가 없으면 오늘날짜로 템플릿을 만듬
                  database.setTodayDiaryTemplate(user.uid, current);
                }
              }
              setLoginUser({
                ...response,
                uid: user.uid,
              });
            }
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        history.push("/");
      }
    });
    return () => {
      setLoginUser();
    };
  }, []);

  const goDiaryPage = () => {
    history.push({
      pathname: "/diary",
      state: {
        uid: loginUser.uid,
        todayDiary: loginUser.userDiary[current].diary,
        currentDate: current,
      },
    });
  };
  const goDietPage = () => {
    history.push({
      pathname: "/diet",
      state: {
        uid: loginUser.uid,
      },
    });
  };
  const goWaterPage = () => {
    history.push({
      pathname: "/water",
      state: {
        uid: loginUser.uid,
      },
    });
  };
  const goExercisePage = () => {
    history.push({
      pathname: "/exercise",
      state: {
        uid: loginUser.uid,
      },
    });
  };
  const goGoalPage = () => {
    history.push({
      pathname: "/goal",
      state: {
        uid: loginUser.uid,
      },
    });
  };
  const {
    information: { basic, required },
    userDiary,
  } = loginUser;
  return (
    <>
      {loginUser.uid ? (
        <div className={styles.container}>
          <h1>반갑습니다.</h1>
          <h1>{`현재 몸무게 : ${required.weight}`}</h1>
          <h1>{`목표 몸무게 : `}</h1>
          <h1>{`하루 권장 칼로리 : ${required.recommendedCalories}`}</h1>
          <p>{`오늘의 일기 : ${userDiary[current].diary}`}</p>
          <p>{`오늘의 식사 : ${userDiary[current].diet}`}</p>
          <p>{`오늘의 물 : ${userDiary[current].water}`}</p>
          <p>{`오늘의 운동 : ${userDiary[current].exercise}`}</p>
          <button onClick={goDiaryPage}>일기 작성하기</button>
          <button onClick={goDietPage}>식사 입력하기</button>
          <button onClick={goWaterPage}>물 입력하기</button>
          <button onClick={goExercisePage}>운동 기록하기</button>
          <button onClick={goGoalPage}>목표 몸무게 등록하기</button>
        </div>
      ) : (
        <div className={styles.container}>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
});

export default Main;

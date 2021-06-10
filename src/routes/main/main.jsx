import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
const Main = (props) => {
  const {
    authService,
    database,
    history,
    isUser,
    user,
    loginUser,
    logoutUser,
  } = props;

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
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDay = week[new Date().getDay()];
  const [currentUser, setcurrentUser] = useState({
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
  const {
    information: { basic, required },
    userDiary,
  } = currentUser;
  const [isLoading, setIsLoading] = useState(false);
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
              }
              if (response.userDiary[current] === undefined) {
                database.setTodayDiaryTemplate(USER.uid, current);
                setcurrentUser({
                  ...response,
                  userDiary: {
                    ...response.userDiary,
                    [current]: {
                      diary: "",
                      diet: {
                        breakfast: "",
                        lunch: "",
                        dinner: "",
                        dessert: "",
                        totalCalories: "",
                      },
                      exercise: "",
                      water: {
                        breakfast: "",
                        lunch: "",
                        dinner: "",
                        totalWater: "",
                      },
                    },
                  },
                });
              } else {
                setcurrentUser({
                  ...response,
                });
              }
              setIsLoading(true);
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
      setcurrentUser();
    };
  }, []);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.main}>
          <p className={styles.title}>
            {currentMonth}월 {currentDate}일 {currentDay}요일
          </p>
          <div className={styles.text}>
            <div className={styles.text_text1}>
              <i className={`fas fa-cookie-bite ${styles.icon}`}></i>
              <span>하루 권장 칼로리</span>
            </div>
            <div className={styles.text_text2}>
              <span>{required.recommendedCalories} </span>
              <span> Kcal</span>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default Main;

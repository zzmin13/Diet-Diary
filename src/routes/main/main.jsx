import React, { useEffect, useState } from "react";
import DietItem from "../../components/diet_item/diet_item";
import Loading from "../../components/loading/loading";
import styles from "./main.module.css";
const Main = ({
  authService,
  database,
  history,
  user,
  loadUserInformation,
}) => {
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
  const [isLoading, setIsLoading] = useState(false);

  const GoEditPage = (event) => {
    history.push(`/${event.currentTarget.id}`);
  };
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
                const data = {
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
                };
                loadUserInformation(data);
              } else {
                loadUserInformation(response);
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
  }, []);
  return (
    <div className={styles.container}>
      {isLoading && user ? (
        <div className={styles.main}>
          <p className={styles.title}>
            {currentMonth}월 {currentDate}일 {currentDay}요일🎵
          </p>
          <div className={`${styles.text_row} ${styles.text_first}`}>
            <div className={styles.text_text1}>
              <i
                className={`fas fa-cookie-bite ${styles.icon} ${styles.icon_cookie}`}
              ></i>
              <span className={styles.bold}>하루 권장 칼로리</span>
            </div>
            <div className={styles.text_text2}>
              <span>{user.information.required.recommendedCalories} </span>
              <span> Kcal</span>
            </div>
          </div>
          <div className={`${styles.text_row}`}>
            <div className={styles.text_text1}>
              <i
                className={`fas fa-weight ${styles.icon} ${styles.icon_weight}`}
              ></i>
              <span className={styles.bold}>현재 몸무게</span>
            </div>
            <div className={styles.text_text2}>
              <span>{user.information.required.weight} </span>
              <span> Kg</span>
            </div>
          </div>
          <div className={`${styles.text} ${styles.text_column}`}>
            <div className={styles.text_text1}>
              <i
                className={`fas fa-book-open ${styles.icon} ${styles.icon_diary}`}
              ></i>
              <span className={styles.bold}>오늘의 일기</span>
              <button
                onClick={GoEditPage}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: 0,
                }}
                id="diary"
              >
                <i className={`fas fa-pen ${styles.icon_edit}`}></i>
              </button>
            </div>
            <div className={styles.text_column_child}>
              <p className={styles.text_diary}>
                {user.userDiary[current].diary
                  ? user.userDiary[current].diary
                  : "일기가 아직 없습니다."}
              </p>
            </div>
          </div>
          <div className={`${styles.text} ${styles.text_column}`}>
            <div className={styles.text_column_title}>
              <div>
                <i
                  className={`fas fa-utensils ${styles.icon} ${styles.icon_diet}`}
                ></i>
                <span className={styles.bold}>오늘의 식사</span>
                <button
                  onClick={GoEditPage}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    padding: 0,
                  }}
                  id="diet"
                >
                  <i className={`fas fa-pen ${styles.icon_edit}`}></i>
                </button>
              </div>
              <div className={styles.text_text2}>
                <span>
                  {user.userDiary[current].diet.totalCalories
                    ? user.userDiary[current].diet.totalCalories
                    : 0}{" "}
                </span>
                <span> Kcal</span>
              </div>
            </div>
            <div className={styles.text_column_child}>
              <div className={styles.text_diet}>
                <div className={styles.text_diet_meta}>
                  <div className={styles.text_diet_time}>
                    <h1 className={styles.text_diet_title}>아침</h1>
                    <div className={styles.text_text2}>
                      <span>
                        {user.userDiary[current].diet.breakfast.totalCalories
                          ? user.userDiary[current].diet.breakfast.totalCalories
                          : 0}
                      </span>
                      <span>Kcal</span>
                    </div>
                  </div>
                  <ul className={styles.text_diet_list}>
                    {user.userDiary[current].diet.breakfast
                      ? Object.keys(user.userDiary[current].diet.breakfast).map(
                          (element) => {
                            if (element !== "totalCalories") {
                              return (
                                <DietItem
                                  key={
                                    user.userDiary[current].diet.breakfast[
                                      element
                                    ].id
                                  }
                                  diet={
                                    user.userDiary[current].diet.breakfast[
                                      element
                                    ]
                                  }
                                />
                              );
                            }
                          }
                        )
                      : null}
                  </ul>
                </div>
              </div>
              <div className={styles.text_diet}>
                <div className={styles.text_diet_meta}>
                  <div className={styles.text_diet_time}>
                    <h1 className={styles.text_diet_title}>점심</h1>
                    <div className={styles.text_text2}>
                      <span>
                        {user.userDiary[current].diet.lunch.totalCalories
                          ? user.userDiary[current].diet.lunch.totalCalories
                          : 0}
                      </span>
                      <span>Kcal</span>
                    </div>
                  </div>
                  <ul className={styles.text_diet_list}>
                    {user.userDiary[current].diet.lunch
                      ? Object.keys(user.userDiary[current].diet.lunch).map(
                          (element) => {
                            if (element !== "totalCalories") {
                              return (
                                <DietItem
                                  key={
                                    user.userDiary[current].diet.lunch[element]
                                      .id
                                  }
                                  diet={
                                    user.userDiary[current].diet.lunch[element]
                                  }
                                />
                              );
                            }
                          }
                        )
                      : null}
                  </ul>
                </div>
              </div>
              <div className={styles.text_diet}>
                <div className={styles.text_diet_meta}>
                  <div className={styles.text_diet_time}>
                    <h1 className={styles.text_diet_title}>저녁</h1>
                    <div className={styles.text_text2}>
                      <span>
                        {user.userDiary[current].diet.dinner.totalCalories
                          ? user.userDiary[current].diet.dinner.totalCalories
                          : 0}
                      </span>
                      <span>Kcal</span>
                    </div>
                  </div>
                  <ul className={styles.text_diet_list}>
                    {user.userDiary[current].diet.dinner
                      ? Object.keys(user.userDiary[current].diet.dinner).map(
                          (element) => {
                            if (element !== "totalCalories") {
                              return (
                                <DietItem
                                  key={
                                    user.userDiary[current].diet.dinner[element]
                                      .id
                                  }
                                  diet={
                                    user.userDiary[current].diet.dinner[element]
                                  }
                                />
                              );
                            }
                          }
                        )
                      : null}
                  </ul>
                </div>
              </div>
              <div className={styles.text_diet}>
                <div className={styles.text_diet_meta}>
                  <div className={styles.text_diet_time}>
                    <h1 className={styles.text_diet_title}>간식</h1>
                    <div className={styles.text_text2}>
                      <span>
                        {user.userDiary[current].diet.dessert.totalCalories
                          ? user.userDiary[current].diet.dessert.totalCalories
                          : 0}
                      </span>
                      <span>Kcal</span>
                    </div>
                  </div>
                  <ul className={styles.text_diet_list}>
                    {user.userDiary[current].diet.dessert
                      ? Object.keys(user.userDiary[current].diet.dessert).map(
                          (element) => {
                            if (element !== "totalCalories") {
                              return (
                                <DietItem
                                  key={
                                    user.userDiary[current].diet.dessert[
                                      element
                                    ].id
                                  }
                                  diet={
                                    user.userDiary[current].diet.dessert[
                                      element
                                    ]
                                  }
                                />
                              );
                            }
                          }
                        )
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.text} ${styles.text_column}`}>
            <div className={styles.text_column_title}>
              <div>
                <i
                  className={`fas fa-tint ${styles.icon} ${styles.icon_water}`}
                ></i>
                <span className={styles.bold}>오늘의 물</span>
                <button
                  onClick={GoEditPage}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    padding: 0,
                  }}
                  id="water"
                >
                  <i className={`fas fa-pen ${styles.icon_edit}`}></i>
                </button>
              </div>
              <div className={styles.text_text2}>
                <span>
                  {user.userDiary[current].water.totalWater
                    ? user.userDiary[current].water.totalWater
                    : 0}{" "}
                </span>
                <span> ml</span>
              </div>
            </div>
            <div className={styles.text_column_child}>
              <div className={styles.text_diet}>
                <div className={styles.diet_meta}>
                  <h1 className={styles.text_diet_title}>아침</h1>
                </div>
                <div className={styles.text_text2}>
                  <span>
                    {user.userDiary[current].water.breakfast
                      ? user.userDiary[current].water.breakfast
                      : 0}{" "}
                  </span>
                  <span> ml</span>
                </div>
              </div>
              <div className={styles.text_diet}>
                <div className={styles.diet_meta}>
                  <h1 className={styles.text_diet_title}>점심</h1>
                </div>
                <div className={styles.text_text2}>
                  <span>
                    {user.userDiary[current].water.lunch
                      ? user.userDiary[current].water.lunch
                      : 0}{" "}
                  </span>
                  <span> ml</span>
                </div>
              </div>
              <div className={styles.text_diet}>
                <div className={styles.diet_meta}>
                  <h1 className={styles.text_diet_title}>저녁</h1>
                </div>
                <div className={styles.text_text2}>
                  <span>
                    {user.userDiary[current].water.dinner
                      ? user.userDiary[current].water.dinner
                      : 0}{" "}
                  </span>
                  <span> ml</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.text_row} ${styles.text_last}`}>
            <div className={styles.text_text1}>
              <i
                className={`fas fa-dumbbell ${styles.icon} ${styles.icon_exercise}`}
              ></i>
              <span className={styles.bold}>오늘의 운동</span>
              <button
                onClick={GoEditPage}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: 0,
                }}
                id="exercise"
              >
                <i className={`fas fa-pen ${styles.icon_edit}`}></i>
              </button>
            </div>
            <div className={styles.text_text2}>
              <span>
                {user.userDiary[current].exercise
                  ? user.userDiary[current].exercise
                  : 0}{" "}
              </span>
              <span> Kcal</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Main;

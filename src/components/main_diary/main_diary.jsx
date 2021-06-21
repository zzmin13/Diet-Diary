import React from "react";
import styles from "./main_diary.module.css";
import DietItem from "../diet_item/diet_item";
import ExerciseItem from "../exercise_item/exercise_item";
const MainDiary = ({ diaryDate, daytext, user, goeditpage }) => {
  return (
    <>
      {user && (
        <>
          <div className={styles.titlebox}>
            <p className={styles.title}>
              {diaryDate.substring(4, 6)}월 {diaryDate.substring(6, 8)}일{" "}
              {daytext}
              요일🎵
            </p>
          </div>
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
                onClick={goeditpage}
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
                {user.userDiary[diaryDate].diary
                  ? user.userDiary[diaryDate].diary
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
                  onClick={goeditpage}
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
                  {user.userDiary[diaryDate].diet.totalCalories
                    ? user.userDiary[diaryDate].diet.totalCalories
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
                        {user.userDiary[diaryDate].diet.breakfast.totalCalories
                          ? user.userDiary[diaryDate].diet.breakfast
                              .totalCalories
                          : 0}
                      </span>
                      <span>Kcal</span>
                    </div>
                  </div>
                  <ul className={styles.text_diet_list}>
                    {user.userDiary[diaryDate].diet.breakfast
                      ? Object.keys(
                          user.userDiary[diaryDate].diet.breakfast
                        ).map((element) => {
                          if (element !== "totalCalories") {
                            return (
                              <DietItem
                                key={
                                  user.userDiary[diaryDate].diet.breakfast[
                                    element
                                  ].id
                                }
                                diet={
                                  user.userDiary[diaryDate].diet.breakfast[
                                    element
                                  ]
                                }
                              />
                            );
                          }
                        })
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
                        {user.userDiary[diaryDate].diet.lunch.totalCalories
                          ? user.userDiary[diaryDate].diet.lunch.totalCalories
                          : 0}
                      </span>
                      <span>Kcal</span>
                    </div>
                  </div>
                  <ul className={styles.text_diet_list}>
                    {user.userDiary[diaryDate].diet.lunch
                      ? Object.keys(user.userDiary[diaryDate].diet.lunch).map(
                          (element) => {
                            if (element !== "totalCalories") {
                              return (
                                <DietItem
                                  key={
                                    user.userDiary[diaryDate].diet.lunch[
                                      element
                                    ].id
                                  }
                                  diet={
                                    user.userDiary[diaryDate].diet.lunch[
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
                    <h1 className={styles.text_diet_title}>저녁</h1>
                    <div className={styles.text_text2}>
                      <span>
                        {user.userDiary[diaryDate].diet.dinner.totalCalories
                          ? user.userDiary[diaryDate].diet.dinner.totalCalories
                          : 0}
                      </span>
                      <span>Kcal</span>
                    </div>
                  </div>
                  <ul className={styles.text_diet_list}>
                    {user.userDiary[diaryDate].diet.dinner
                      ? Object.keys(user.userDiary[diaryDate].diet.dinner).map(
                          (element) => {
                            if (element !== "totalCalories") {
                              return (
                                <DietItem
                                  key={
                                    user.userDiary[diaryDate].diet.dinner[
                                      element
                                    ].id
                                  }
                                  diet={
                                    user.userDiary[diaryDate].diet.dinner[
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
                    <h1 className={styles.text_diet_title}>간식</h1>
                    <div className={styles.text_text2}>
                      <span>
                        {user.userDiary[diaryDate].diet.dessert.totalCalories
                          ? user.userDiary[diaryDate].diet.dessert.totalCalories
                          : 0}
                      </span>
                      <span>Kcal</span>
                    </div>
                  </div>
                  <ul className={styles.text_diet_list}>
                    {user.userDiary[diaryDate].diet.dessert
                      ? Object.keys(user.userDiary[diaryDate].diet.dessert).map(
                          (element) => {
                            if (element !== "totalCalories") {
                              return (
                                <DietItem
                                  key={
                                    user.userDiary[diaryDate].diet.dessert[
                                      element
                                    ].id
                                  }
                                  diet={
                                    user.userDiary[diaryDate].diet.dessert[
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
                  onClick={goeditpage}
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
                  {user.userDiary[diaryDate].water.totalWater
                    ? user.userDiary[diaryDate].water.totalWater
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
                    {user.userDiary[diaryDate].water.breakfast
                      ? user.userDiary[diaryDate].water.breakfast
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
                    {user.userDiary[diaryDate].water.lunch
                      ? user.userDiary[diaryDate].water.lunch
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
                    {user.userDiary[diaryDate].water.dinner
                      ? user.userDiary[diaryDate].water.dinner
                      : 0}{" "}
                  </span>
                  <span> ml</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.text_column} ${styles.text_last}`}>
            <div className={styles.text_exercise_meta}>
              <div className={styles.text_text1}>
                <i
                  className={`fas fa-dumbbell ${styles.icon} ${styles.icon_exercise}`}
                ></i>
                <span className={styles.bold}>오늘의 운동</span>
                <button
                  onClick={goeditpage}
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
                  {user.userDiary[diaryDate].exercise
                    ? user.userDiary[diaryDate].exercise.totalCalories
                    : 0}{" "}
                </span>
                <span> Kcal</span>
              </div>
            </div>
            <ul className={styles.exercise_list}>
              {Object.keys(user.userDiary[diaryDate].exercise).map(
                (element) => {
                  if (element !== "totalCalories") {
                    return (
                      <ExerciseItem
                        key={element}
                        exercise={user.userDiary[diaryDate].exercise[element]}
                      />
                    );
                  }
                }
              )}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default MainDiary;

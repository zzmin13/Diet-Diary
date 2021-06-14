import React, { useEffect } from "react";
import styles from "./diet.module.css";
import DietItem from "../../components/diet_item/diet_item";
const Diet = (props) => {
  const { history, authService, database, foodSearch, user, uid } = props;
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

  const goDietAddPage = () => {
    history.push("/diet/add");
  };
  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (!USER) {
        history.push("/");
      }
    });
  });
  return (
    <>
      {user.userDiary ? (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.title}>
              <i className={`fas fa-utensils ${styles.icon}`}></i>
              <span>오늘의 식사</span>
            </div>
            <div className={`${styles.text} ${styles.text_column}`}>
              <div className={styles.text_column_title}>
                <div>
                  <span className={styles.bold}>칼로리 합계</span>
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
                            ? user.userDiary[current].diet.breakfast
                                .totalCalories
                            : 0}
                        </span>
                        <span>Kcal</span>
                      </div>
                    </div>
                    <ul className={styles.text_diet_list}>
                      {user.userDiary[current].diet.breakfast
                        ? Object.keys(
                            user.userDiary[current].diet.breakfast
                          ).map((element) => {
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
                                  current={current}
                                  uid={uid}
                                  time={"breakfast"}
                                  timeTotalCalories={Number(
                                    user.userDiary[current].diet.breakfast
                                      .totalCalories
                                  )}
                                  todayTotalCalories={Number(
                                    user.userDiary[current].diet.totalCalories
                                  )}
                                  database={database}
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
                                      user.userDiary[current].diet.lunch[
                                        element
                                      ].id
                                    }
                                    diet={
                                      user.userDiary[current].diet.lunch[
                                        element
                                      ]
                                    }
                                    time={"lunch"}
                                    timeTotalCalories={Number(
                                      user.userDiary[current].diet.lunch
                                        .totalCalories
                                    )}
                                    todayTotalCalories={Number(
                                      user.userDiary[current].diet.totalCalories
                                    )}
                                    database={database}
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
                                      user.userDiary[current].diet.dinner[
                                        element
                                      ].id
                                    }
                                    diet={
                                      user.userDiary[current].diet.dinner[
                                        element
                                      ]
                                    }
                                    time={"dinner"}
                                    timeTotalCalories={Number(
                                      user.userDiary[current].diet.dinner
                                        .totalCalories
                                    )}
                                    todayTotalCalories={Number(
                                      user.userDiary[current].diet.totalCalories
                                    )}
                                    database={database}
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
                                    uid={uid}
                                    current={current}
                                    time={"dessert"}
                                    timeTotalCalories={Number(
                                      user.userDiary[current].diet.dessert
                                        .totalCalories
                                    )}
                                    todayTotalCalories={Number(
                                      user.userDiary[current].diet.totalCalories
                                    )}
                                    database={database}
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
            <button onClick={goDietAddPage} className={styles.button}>
              식사 추가하기
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Diet;

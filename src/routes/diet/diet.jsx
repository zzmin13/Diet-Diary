import React, { useEffect } from "react";
import styles from "./diet.module.css";
import DietItem from "../../components/diet_item/diet_item";
const Diet = (props) => {
  const {
    history,
    authService,
    database,
    user,
    uid,
    dateObject: { date },
    deleteDiet,
  } = props;
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
              <span>
                {date.substring(4, 6)}월 {date.substring(6, 8)}일의 식사
              </span>
            </div>
            <div className={`${styles.text} ${styles.text_column}`}>
              <div className={styles.text_column_title}>
                <div>
                  <span className={styles.bold}>칼로리 합계</span>
                </div>
                <div className={styles.text_text2}>
                  <span>
                    {user.userDiary[date].diet.totalCalories
                      ? user.userDiary[date].diet.totalCalories
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
                          {user.userDiary[date].diet.breakfast.totalCalories
                            ? user.userDiary[date].diet.breakfast.totalCalories
                            : 0}
                        </span>
                        <span>Kcal</span>
                      </div>
                    </div>
                    <ul className={styles.text_diet_list}>
                      {user.userDiary[date].diet.breakfast
                        ? Object.keys(user.userDiary[date].diet.breakfast).map(
                            (element) => {
                              if (element !== "totalCalories") {
                                return (
                                  <DietItem
                                    key={
                                      user.userDiary[date].diet.breakfast[
                                        element
                                      ].id
                                    }
                                    diet={
                                      user.userDiary[date].diet.breakfast[
                                        element
                                      ]
                                    }
                                    current={date}
                                    uid={uid}
                                    time={"breakfast"}
                                    timeTotalCalories={Number(
                                      user.userDiary[date].diet.breakfast
                                        .totalCalories
                                    )}
                                    todayTotalCalories={Number(
                                      user.userDiary[date].diet.totalCalories
                                    )}
                                    database={database}
                                    deleteDiet={deleteDiet}
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
                          {user.userDiary[date].diet.lunch.totalCalories
                            ? user.userDiary[date].diet.lunch.totalCalories
                            : 0}
                        </span>
                        <span>Kcal</span>
                      </div>
                    </div>
                    <ul className={styles.text_diet_list}>
                      {user.userDiary[date].diet.lunch
                        ? Object.keys(user.userDiary[date].diet.lunch).map(
                            (element) => {
                              if (element !== "totalCalories") {
                                return (
                                  <DietItem
                                    key={
                                      user.userDiary[date].diet.lunch[element]
                                        .id
                                    }
                                    diet={
                                      user.userDiary[date].diet.lunch[element]
                                    }
                                    time={"lunch"}
                                    timeTotalCalories={Number(
                                      user.userDiary[date].diet.lunch
                                        .totalCalories
                                    )}
                                    todayTotalCalories={Number(
                                      user.userDiary[date].diet.totalCalories
                                    )}
                                    database={database}
                                    deleteDiet={deleteDiet}
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
                          {user.userDiary[date].diet.dinner.totalCalories
                            ? user.userDiary[date].diet.dinner.totalCalories
                            : 0}
                        </span>
                        <span>Kcal</span>
                      </div>
                    </div>
                    <ul className={styles.text_diet_list}>
                      {user.userDiary[date].diet.dinner
                        ? Object.keys(user.userDiary[date].diet.dinner).map(
                            (element) => {
                              if (element !== "totalCalories") {
                                return (
                                  <DietItem
                                    key={
                                      user.userDiary[date].diet.dinner[element]
                                        .id
                                    }
                                    diet={
                                      user.userDiary[date].diet.dinner[element]
                                    }
                                    time={"dinner"}
                                    timeTotalCalories={Number(
                                      user.userDiary[date].diet.dinner
                                        .totalCalories
                                    )}
                                    todayTotalCalories={Number(
                                      user.userDiary[date].diet.totalCalories
                                    )}
                                    database={database}
                                    deleteDiet={deleteDiet}
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
                          {user.userDiary[date].diet.dessert.totalCalories
                            ? user.userDiary[date].diet.dessert.totalCalories
                            : 0}
                        </span>
                        <span>Kcal</span>
                      </div>
                    </div>
                    <ul className={styles.text_diet_list}>
                      {user.userDiary[date].diet.dessert
                        ? Object.keys(user.userDiary[date].diet.dessert).map(
                            (element) => {
                              if (element !== "totalCalories") {
                                return (
                                  <DietItem
                                    key={
                                      user.userDiary[date].diet.dessert[element]
                                        .id
                                    }
                                    diet={
                                      user.userDiary[date].diet.dessert[element]
                                    }
                                    uid={uid}
                                    current={date}
                                    time={"dessert"}
                                    timeTotalCalories={Number(
                                      user.userDiary[date].diet.dessert
                                        .totalCalories
                                    )}
                                    todayTotalCalories={Number(
                                      user.userDiary[date].diet.totalCalories
                                    )}
                                    database={database}
                                    deleteDiet={deleteDiet}
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

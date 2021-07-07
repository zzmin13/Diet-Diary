import React, { useEffect } from "react";
import styles from "./diet.module.css";
import DietItem from "../../components/diet_item/diet_item";
import NotDiary from "../../components/not_diary/not_diary";
const Diet = (props) => {
  const {
    history,
    database,
    user,
    isUser,
    uid,
    dateObject: { date },
    deleteDiet,
    loadUserInformation,
  } = props;
  const goDietAddPage = () => {
    history.push("/diet/add");
  };
  const goBackPage = () => {
    history.push("/main");
  };
  useEffect(() => {
    if (!isUser) {
      history.push("/main");
    }
  });
  return (
    <>
      {user ? (
        <div className={styles.container}>
          <div className={styles.main}>
            <button onClick={goBackPage} className={styles.button_back}>
              <i
                className={`fas fa-long-arrow-alt-left ${styles.icon_back}`}
              ></i>
              <span>MAIN</span>
            </button>
            <div className={styles.content}>
              <div className={styles.title}>
                <i className={`fas fa-utensils ${styles.icon}`}></i>
                <span>
                  {date.substring(4, 6)}월 {date.substring(6, 8)}일의 식사
                </span>
              </div>
              {user.userDiary[date] ? (
                <>
                  <div className={styles.text_column}>
                    <div className={styles.text_column_title}>
                      <div>
                        <span className={styles.bold}>칼로리 합계</span>
                      </div>
                      <div className={styles.text_text2}>
                        <span>
                          {user.userDiary[date]
                            ? user.userDiary[date].diet.totalCalories
                              ? user.userDiary[date].diet.totalCalories
                              : 0
                            : null}{" "}
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
                                {user.userDiary[date]
                                  ? user.userDiary[date].diet.breakfast
                                      .totalCalories
                                    ? user.userDiary[date].diet.breakfast
                                        .totalCalories
                                    : 0
                                  : null}
                              </span>
                              <span>Kcal</span>
                            </div>
                          </div>
                          <ul className={styles.text_diet_list}>
                            {user.userDiary[date]
                              ? user.userDiary[date].diet.breakfast
                                ? Object.keys(
                                    user.userDiary[date].diet.breakfast
                                  ).map((element) => {
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
                                          date={date}
                                          uid={uid}
                                          time={"breakfast"}
                                          timeTotalCalories={Number(
                                            user.userDiary[date].diet.breakfast
                                              .totalCalories
                                          )}
                                          todayTotalCalories={Number(
                                            user.userDiary[date].diet
                                              .totalCalories
                                          )}
                                          database={database}
                                          deleteDiet={deleteDiet}
                                        />
                                      );
                                    } else {
                                      return null;
                                    }
                                  })
                                : null
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
                                {user.userDiary[date]
                                  ? user.userDiary[date].diet.lunch
                                      .totalCalories
                                    ? user.userDiary[date].diet.lunch
                                        .totalCalories
                                    : 0
                                  : null}
                              </span>
                              <span>Kcal</span>
                            </div>
                          </div>
                          <ul className={styles.text_diet_list}>
                            {user.userDiary[date]
                              ? user.userDiary[date].diet.lunch
                                ? Object.keys(
                                    user.userDiary[date].diet.lunch
                                  ).map((element) => {
                                    if (element !== "totalCalories") {
                                      return (
                                        <DietItem
                                          key={
                                            user.userDiary[date].diet.lunch[
                                              element
                                            ].id
                                          }
                                          diet={
                                            user.userDiary[date].diet.lunch[
                                              element
                                            ]
                                          }
                                          date={date}
                                          uid={uid}
                                          time={"lunch"}
                                          timeTotalCalories={Number(
                                            user.userDiary[date].diet.lunch
                                              .totalCalories
                                          )}
                                          todayTotalCalories={Number(
                                            user.userDiary[date].diet
                                              .totalCalories
                                          )}
                                          database={database}
                                          deleteDiet={deleteDiet}
                                        />
                                      );
                                    } else {
                                      return null;
                                    }
                                  })
                                : null
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
                                {user.userDiary[date]
                                  ? user.userDiary[date].diet.dinner
                                      .totalCalories
                                    ? user.userDiary[date].diet.dinner
                                        .totalCalories
                                    : 0
                                  : null}
                              </span>
                              <span>Kcal</span>
                            </div>
                          </div>
                          <ul className={styles.text_diet_list}>
                            {user.userDiary[date]
                              ? user.userDiary[date].diet.dinner
                                ? Object.keys(
                                    user.userDiary[date].diet.dinner
                                  ).map((element) => {
                                    if (element !== "totalCalories") {
                                      return (
                                        <DietItem
                                          key={
                                            user.userDiary[date].diet.dinner[
                                              element
                                            ].id
                                          }
                                          diet={
                                            user.userDiary[date].diet.dinner[
                                              element
                                            ]
                                          }
                                          date={date}
                                          uid={uid}
                                          time={"dinner"}
                                          timeTotalCalories={Number(
                                            user.userDiary[date].diet.dinner
                                              .totalCalories
                                          )}
                                          todayTotalCalories={Number(
                                            user.userDiary[date].diet
                                              .totalCalories
                                          )}
                                          database={database}
                                          deleteDiet={deleteDiet}
                                        />
                                      );
                                    } else {
                                      return null;
                                    }
                                  })
                                : null
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
                                {user.userDiary[date]
                                  ? user.userDiary[date].diet.dessert
                                      .totalCalories
                                    ? user.userDiary[date].diet.dessert
                                        .totalCalories
                                    : 0
                                  : null}
                              </span>
                              <span>Kcal</span>
                            </div>
                          </div>
                          <ul className={styles.text_diet_list}>
                            {user.userDiary[date]
                              ? user.userDiary[date].diet.dessert
                                ? Object.keys(
                                    user.userDiary[date].diet.dessert
                                  ).map((element) => {
                                    if (element !== "totalCalories") {
                                      return (
                                        <DietItem
                                          key={
                                            user.userDiary[date].diet.dessert[
                                              element
                                            ].id
                                          }
                                          diet={
                                            user.userDiary[date].diet.dessert[
                                              element
                                            ]
                                          }
                                          date={date}
                                          uid={uid}
                                          time={"dessert"}
                                          timeTotalCalories={Number(
                                            user.userDiary[date].diet.dessert
                                              .totalCalories
                                          )}
                                          todayTotalCalories={Number(
                                            user.userDiary[date].diet
                                              .totalCalories
                                          )}
                                          database={database}
                                          deleteDiet={deleteDiet}
                                        />
                                      );
                                    } else {
                                      return null;
                                    }
                                  })
                                : null
                              : null}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={goDietAddPage} className={styles.button}>
                    식사 추가하기
                  </button>
                </>
              ) : (
                <>
                  <NotDiary
                    loadUserInformation={loadUserInformation}
                    database={database}
                    uid={uid}
                    date={date}
                    user={user}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Diet;

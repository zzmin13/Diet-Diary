import React from "react";
import { useEffect } from "react";
import styles from "./water.module.css";
const Water = ({ authService, history, user }) => {
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
              <i className={`fas fa-tint ${styles.icon}`}></i>
              <span>오늘의 물</span>
            </div>
            <div className={`${styles.text} ${styles.text_column}`}>
              <div className={styles.text_column_title}>
                <div>
                  <span className={styles.bold}>물 합계</span>
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
                <div className={styles.text_water}>
                  <div className={styles.text_water_meta}>
                    <div className={styles.text_water_time}>
                      <h1 className={styles.text_water_title}>아침</h1>
                      <div className={styles.text_text2}>
                        <span>
                          {user.userDiary[current].water.breakfast.totalWater
                            ? user.userDiary[current].water.breakfast.totalWater
                            : 0}
                        </span>
                        <span>ml</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.text_water}>
                  <div className={styles.text_water_meta}>
                    <div className={styles.text_water_time}>
                      <h1 className={styles.text_water_title}>점심</h1>
                      <div className={styles.text_text2}>
                        <span>
                          {user.userDiary[current].water.lunch.totalWater
                            ? user.userDiary[current].water.lunch.totalWater
                            : 0}
                        </span>
                        <span>ml</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.text_water}>
                  <div className={styles.text_water_meta}>
                    <div className={styles.text_water_time}>
                      <h1 className={styles.text_water_title}>저녁</h1>
                      <div className={styles.text_text2}>
                        <span>
                          {user.userDiary[current].water.dinner.totalWater
                            ? user.userDiary[current].water.dinner.totalWater
                            : 0}
                        </span>
                        <span>ml</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Water;

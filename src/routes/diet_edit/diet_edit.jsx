import React from "react";
import { useEffect } from "react";
import styles from "./diet_edit.module.css";

const DietEdit = (props) => {
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

  const {
    database,
    history,
    location: {
      state,
      state: { dietId, time },
    },
    uid,
    user,
  } = props;
  useEffect(() => {
    if (state === undefined) {
      history.push("/main");
    }
  }, []);
  return (
    <>
      {state && user && (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.title}>
              <span>식사 수정하기</span>
              <i className={`fas fa-pen ${styles.icon}`}></i>
            </div>
            <form className={styles.form}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="name">
                    음식명
                  </label>
                  <div className={styles.item_second}>
                    <input
                      defaultValue={
                        user.userDiary[current].diet[time][dietId].name
                      }
                      className={styles.item_input}
                      type="text"
                      id="name"
                      required={true}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="amount">
                    음식량
                  </label>
                  <div className={styles.item_second}>
                    <input
                      defaultValue={
                        user.userDiary[current].diet[time][dietId].totalSize
                      }
                      className={styles.item_input}
                      type="text"
                      id="size"
                      required={true}
                    />
                    <label className={styles.item_behind} htmlFor="size">
                      g
                    </label>
                  </div>
                </div>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="kcal">
                    칼로리
                  </label>
                  <div className={styles.item_second}>
                    <input
                      defaultValue={
                        user.userDiary[current].diet[time][dietId].kcal
                      }
                      className={styles.item_input}
                      type="text"
                      id="kcal"
                      required={true}
                    />
                    <label className={styles.item_behind} htmlFor="kcal">
                      kcal
                    </label>
                  </div>
                </div>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="time">
                    식사 시간
                  </label>
                  <div className={styles.item_second}>
                    <select
                      id="time"
                      className={styles.time_select}
                      defaultValue={time}
                    >
                      <option value="breakfast">아침</option>
                      <option value="lunch">점심</option>
                      <option value="dinner">저녁</option>
                      <option value="dessert">간식</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className={styles.addButton}>수정하기</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DietEdit;

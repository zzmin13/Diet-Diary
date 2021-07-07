import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styles from "./weight.module.css";

const Weight = ({
  editTodayWeight,
  database,
  dateObject: { date },
  user,
  uid,
  isUser,
  history,
}) => {
  const weightRef = useRef();
  const goBackPage = () => {
    history.push("/main");
  };
  const onEditWeight = () => {
    const weight = Number(weightRef.current.value);
    database.editTodayWeight(uid, date, weight);
    editTodayWeight(date, weight);
    alert("몸무게가 입력되었습니다.");
    history.push("/main");
  };
  useEffect(() => {
    if (!isUser) {
      history.push("/main");
    }
  });
  return (
    <>
      {user && (
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
                <i className={`fas fa-weight ${styles.icon}`}></i>
                <span>
                  {date.substring(4, 6)}월 {date.substring(6, 8)}일의 몸무게
                </span>
              </div>
              <form className={styles.form}>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="weight_input">
                    몸무게
                  </label>
                  <div className={styles.item_second}>
                    <input
                      ref={weightRef}
                      defaultValue={user.userDiary[date].weight}
                      className={styles.item_input}
                      type="number"
                      id="weight_input"
                      required={true}
                    />
                    <label
                      className={styles.item_behind}
                      htmlFor="weight_input"
                    >
                      Kg
                    </label>
                  </div>
                </div>
                <button onClick={onEditWeight} className={styles.addButton}>
                  입력하기
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Weight;

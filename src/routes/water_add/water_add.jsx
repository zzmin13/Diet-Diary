import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./water_add.module.css";
const WaterAdd = ({
  authService,
  database,
  history,
  isUser,
  user,
  uid,
  addWater,
  dateObject: { date },
}) => {
  const mlRef = useRef();
  const cupRef = useRef();
  const timeRef = useRef();
  useEffect(() => {
    if (!isUser) {
      history.push("/main");
    }
  });
  const onIncrease = (event) => {
    if (event.currentTarget.id === "cup") {
      cupRef.current.value = Number(cupRef.current.value) + 1;
      mlRef.current.value = cupRef.current.value * 170;
    } else if (event.currentTarget.id === "ml") {
      mlRef.current.value = Number(mlRef.current.value) + 170;
      cupRef.current.value = mlRef.current.value / 170;
    }
  };
  const onDecrease = (event) => {
    if (event.currentTarget.id === "cup") {
      if (Number(cupRef.current.value) - 1 >= 0) {
        cupRef.current.value = Number(cupRef.current.value) - 1;
        mlRef.current.value = cupRef.current.value * 170;
      }
    } else if (event.currentTarget.id === "ml") {
      if (Number(mlRef.current.value) - 170 >= 0) {
        mlRef.current.value = Number(mlRef.current.value) - 170;
        cupRef.current.value = mlRef.current.value / 170;
      }
    }
  };
  const onChange = (event) => {
    if (event.currentTarget.id === "ml_input") {
      cupRef.current.value = mlRef.current.value / 170;
    } else if (event.currentTarget.id === "cup_input") {
      mlRef.current.value = cupRef.current.value * 170;
    }
  };

  const onAddWater = () => {
    let time;
    if (timeRef.current.value === "아침") {
      time = "breakfast";
    } else if (timeRef.current.value === "점심") {
      time = "lunch";
    } else if (timeRef.current.value === "저녁") {
      time = "dinner";
    }
    const amount = Number(mlRef.current.value);
    const timeAmount = Number(user.userDiary[date].water[time]) + amount;
    const totalAmount = Number(user.userDiary[date].water.totalWater) + amount;
    database.addWater(uid, date, time, timeAmount, totalAmount);
    addWater(date, time, timeAmount, totalAmount);
    alert("물이 추가되었습니다.");
    history.push("/water");
  };
  const goBackPage = () => {
    history.push("/water");
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <button onClick={goBackPage} className={styles.button_back}>
          <i className={`fas fa-long-arrow-alt-left ${styles.icon_back}`}></i>
          <span>BACK</span>
        </button>
        <div className={styles.content}>
          <div className={styles.title}>
            <span>물 추가하기</span>
          </div>
          <div className={styles.helper}>
            <h1 className={styles.helper_text}>
              💡 숫자를 누르면 물의 양을 직접 입력할 수 있어요.
            </h1>
          </div>
          <div className={styles.forms}>
            <div className={styles.item}>
              <select
                ref={timeRef}
                className={`${styles.time_select} ${styles.item}`}
              >
                <option>아침</option>
                <option>점심</option>
                <option>저녁</option>
              </select>
            </div>
            <div className={styles.item}>
              <form className={styles.form}>
                <button
                  onClick={onIncrease}
                  type="button"
                  className={styles.updown_button}
                  id="ml"
                >
                  <i
                    className={`fas fa-chevron-up ${styles.icon_up} ${styles.icon}`}
                  ></i>
                </button>
                <div className={styles.cup_box}>
                  <input
                    id="ml_input"
                    onChange={onChange}
                    ref={mlRef}
                    className={styles.input}
                    type="number"
                    defaultValue={170}
                    step={170}
                  />
                  <span className={styles.ml_text}>ml</span>
                </div>
                <button
                  onClick={onDecrease}
                  type="button"
                  className={styles.updown_button}
                  id="ml"
                >
                  <i
                    className={`fas fa-chevron-down ${styles.icon_down} ${styles.icon}`}
                  ></i>
                </button>
              </form>
            </div>
            <div className={styles.item}>
              <form className={styles.form}>
                <button
                  onClick={onIncrease}
                  type="button"
                  className={styles.updown_button}
                  id="cup"
                >
                  <i
                    className={`fas fa-chevron-up ${styles.icon_up} ${styles.icon}`}
                  ></i>
                </button>
                <div className={styles.cup_box}>
                  <input
                    id="cup_input"
                    onChange={onChange}
                    ref={cupRef}
                    className={styles.input}
                    type="number"
                    defaultValue={1.0}
                    step={1.0}
                  />
                  <span className={styles.cup_text}>종이컵</span>
                </div>
                <button
                  onClick={onDecrease}
                  type="button"
                  className={styles.updown_button}
                  id="cup"
                >
                  <i
                    className={`fas fa-chevron-down ${styles.icon_down} ${styles.icon}`}
                  ></i>
                </button>
              </form>
            </div>
          </div>
          <button onClick={onAddWater} className={styles.button}>
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterAdd;

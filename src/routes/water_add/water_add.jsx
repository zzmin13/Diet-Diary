import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./water_add.module.css";
const WaterAdd = ({ authService, history }) => {
  const mlRef = useRef();
  const cupRef = useRef();

  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (!USER) {
        history.push("/");
      }
    });
  });
  const onIncrease = (event) => {
    if (event.currentTarget.id === "cup") {
      cupRef.current.value = Number(cupRef.current.value) + 1;
    } else if (event.currentTarget.id === "ml") {
      mlRef.current.value = Number(mlRef.current.value) + 170;
    }
  };
  const onDecrease = (event) => {
    if (event.currentTarget.id === "cup") {
      if (Number(cupRef.current.value) !== 0) {
        cupRef.current.value = Number(cupRef.current.value) - 1;
      }
    } else if (event.currentTarget.id === "ml") {
      if (Number(mlRef.current.value) !== 170) {
        mlRef.current.value = Number(mlRef.current.value) - 170;
      }
    }
  };
  const onChange = (event) => {
    if (event.currentTarget.id === "ml") {
      cupRef.current.value = mlRef.current.value / 170;
    } else if (event.currentTarget.id === "cup") {
      mlRef.current.value = cupRef.current.value * 170;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <span>물 추가하기</span>
        </div>
        <div className={styles.forms}>
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
                id="ml"
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
                id="cup"
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
    </div>
  );
};

export default WaterAdd;

import React from "react";
import styles from "./exercise_search.module.css";
import ExerciseItem from "../exercise_item/exercise_item";
import { useRef } from "react";

const ExerciseSearch = ({
  database,
  exercise,
  selectedExercise,
  onSelectExercise,
}) => {
  const exerciseNameRef = useRef();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>운동 검색하기</h1>
      <form className={styles.form}>
        <input type="search" className={styles.input_search} />
        <button className={styles.search_button}>
          <i className={`fas fa-search ${styles.search_icon}`}></i>
        </button>
      </form>
      <div className={styles.result}>
        <div className={styles.result_item}>
          {Object.keys(exercise).map((key, index) => {
            return (
              <ExerciseItem
                key={index}
                database={database}
                id={index}
                name={key}
                kcal={exercise[key]}
                onSelectExercise={onSelectExercise}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.select}>
        <h1 className={styles.select_title}>선택된 항목</h1>
        <div className={styles.select_box1}>
          <div className={styles.item}>
            <span className={styles.exercise_name}>
              {selectedExercise.name ? selectedExercise.name : ""}
            </span>
          </div>
          <div className={styles.item}>
            <form className={styles.subform}>
              <button type="button" className={styles.updown_button} id="time">
                <i
                  className={`fas fa-chevron-up ${styles.icon_up} ${styles.icon}`}
                ></i>
              </button>
              <div className={styles.time_box}>
                <input
                  id="time"
                  className={styles.input_number}
                  type="number"
                  defaultValue={10}
                  step={1.0}
                />
                <span className={styles.time_text}>분</span>
              </div>
              <button type="button" className={styles.updown_button} id="time">
                <i
                  className={`fas fa-chevron-down ${styles.icon_down} ${styles.icon}`}
                ></i>
              </button>
            </form>
          </div>
          <div className={styles.item}>
            <form className={styles.subform}>
              <button type="button" className={styles.updown_button} id="kcal">
                <i
                  className={`fas fa-chevron-up ${styles.icon_up} ${styles.icon}`}
                ></i>
              </button>
              <div className={styles.kcal_box}>
                <input
                  id="kcal"
                  className={styles.input_number}
                  type="number"
                  defaultValue={selectedExercise.kcal}
                  step={1.0}
                />
                <span className={styles.kcal_text}>kcal</span>
              </div>
              <button type="button" className={styles.updown_button} id="kcal">
                <i
                  className={`fas fa-chevron-down ${styles.icon_down} ${styles.icon}`}
                ></i>
              </button>
            </form>
          </div>
        </div>
        <button className={styles.addButton}>추가하기</button>
      </div>
    </div>
  );
};

export default ExerciseSearch;

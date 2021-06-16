import React from "react";
import styles from "./exercise_search.module.css";
import ExerciseItem from "../exercise_item/exercise_item";
import { useRef } from "react";
import { useState } from "react";

const ExerciseSearch = ({
  database,
  exercise,
  uid,
  user,
  current,
  selectedExercise,
  onSelectExercise,
}) => {
  const [searchTerm, setsearchTerm] = useState("");
  const nameRef = useRef();
  const timeRef = useRef();
  const kcalRef = useRef();
  const handleSelectExercise = (name) => {
    onSelectExercise(name);
    timeRef.current.value = 10;
  };
  const onIncrease = (event) => {
    timeRef.current.value = Number(timeRef.current.value) + 1;
    kcalRef.current.innerText = (
      (selectedExercise.kcal / 10) *
      Number(timeRef.current.value)
    ).toFixed(1);
  };
  const onDecrease = () => {
    if (timeRef.current.value > 1) {
      timeRef.current.value = Number(timeRef.current.value) - 1;
      kcalRef.current.innerText = (
        (selectedExercise.kcal / 10) *
        Number(timeRef.current.value)
      ).toFixed(1);
    }
  };
  const onChangeNumber = () => {
    kcalRef.current.innerText = kcalRef.current.innerText = (
      (selectedExercise.kcal / 10) *
      Number(timeRef.current.value)
    ).toFixed(1);
  };
  const onChangeInput = (event) => {
    setsearchTerm(event.currentTarget.value);
  };
  const onAddExercise = () => {
    const exerciseObj = {
      name: nameRef.current.innerText,
      kcal: Number(kcalRef.current.innerText),
      time: Number(timeRef.current.value),
    };
    const exerciseId = Date.now();
    const totalCalories = Number(
      user.userDiary[current].exercise.totalCalories
    );
    console.log(`현재 총 칼로리 :${totalCalories}`);
    console.log(`추가할 운동 칼로리 ${exerciseObj.kcal}`);
    database.addExercise(uid, current, exerciseId, exerciseObj, totalCalories);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>운동 검색하기</h1>
      <form className={styles.form}>
        <input
          type="search"
          className={styles.input_search}
          onChange={onChangeInput}
          value={searchTerm}
        />
        <button className={styles.search_button}>
          <i className={`fas fa-search ${styles.search_icon}`}></i>
        </button>
      </form>
      <div className={styles.result}>
        <div className={styles.result_item}>
          {searchTerm ? (
            <>
              {Object.keys(exercise)
                .filter((name) => name.indexOf(searchTerm) !== -1)
                .map((key, index) => {
                  return (
                    <ExerciseItem
                      key={index}
                      database={database}
                      id={index}
                      name={key}
                      kcal={exercise[key]}
                      handleSelectExercise={handleSelectExercise}
                    />
                  );
                })}
            </>
          ) : (
            <>
              {Object.keys(exercise).map((key, index) => {
                return (
                  <ExerciseItem
                    key={index}
                    database={database}
                    id={index}
                    name={key}
                    kcal={exercise[key]}
                    handleSelectExercise={handleSelectExercise}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className={styles.select}>
        <h1 className={styles.select_title}>선택된 항목</h1>
        <div className={styles.select_box1}>
          <div className={styles.item}>
            <span ref={nameRef} className={styles.exercise_name}>
              {selectedExercise.name ? selectedExercise.name : ""}
            </span>
          </div>
          <div className={styles.item}>
            <form className={styles.subform}>
              <button
                onClick={onIncrease}
                type="button"
                className={styles.updown_button}
              >
                <i
                  className={`fas fa-chevron-up ${styles.icon_up} ${styles.icon}`}
                ></i>
              </button>
              <div className={styles.time_box}>
                <input
                  ref={timeRef}
                  id="time"
                  className={styles.input_number}
                  type="number"
                  defaultValue={10}
                  step={1.0}
                  onChange={onChangeNumber}
                />
                <span className={styles.time_text}>분</span>
              </div>
              <button
                onClick={onDecrease}
                type="button"
                className={styles.updown_button}
              >
                <i
                  className={`fas fa-chevron-down ${styles.icon_down} ${styles.icon}`}
                ></i>
              </button>
            </form>
          </div>
          <div className={styles.item}>
            <form className={styles.subform}>
              <div className={styles.kcal_box}>
                <span ref={kcalRef} className={styles.kcal}>
                  {selectedExercise.kcal}
                </span>
                <span className={styles.kcal_text}>kcal</span>
              </div>
            </form>
          </div>
        </div>
        <button onClick={onAddExercise} className={styles.addButton}>
          추가하기
        </button>
      </div>
    </div>
  );
};

export default ExerciseSearch;

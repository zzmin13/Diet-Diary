import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./exercise_directly.module.css";

const ExerciseDirectly = ({ database, uid, addExercise, current, user }) => {
  const exerciseNameRef = useRef();
  const exerciseTimeRef = useRef();
  const exerciseKcalRef = useRef();
  const history = useHistory();
  const handleOnAddExercise = () => {
    const name = exerciseNameRef.current.value;
    const time = exerciseTimeRef.current.value;
    const kcal = exerciseKcalRef.current.value;
    if (name === "" || time === "" || kcal === "") {
      alert("항목을 채워주세요.");
    } else {
      const exerciseObj = {
        name,
        kcal,
        time,
      };
      const exerciseId = Date.now();
      const totalCalories = Number(
        user.userDiary[current].exercise.totalCalories
      );
      database.addExercise(
        uid,
        current,
        exerciseId,
        exerciseObj,
        totalCalories
      );
      addExercise(current, exerciseId, exerciseObj, totalCalories);
      alert("운동이 추가되었습니다!");
      history.push("/exercise");
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>직접 추가하기</h1>
      <form className={styles.form}>
        <div className={styles.item}>
          <label className={styles.item_name} htmlFor="name">
            운동명
          </label>
          <div className={styles.item_second}>
            <input
              ref={exerciseNameRef}
              className={styles.item_input}
              type="text"
              id="name"
              required={true}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.item_name} htmlFor="time">
            운동시간
          </label>
          <div className={styles.item_second}>
            <input
              ref={exerciseTimeRef}
              className={styles.item_input}
              type="number"
              id="time"
              required={true}
            />
            <label className={styles.item_behind} htmlFor="time">
              분
            </label>
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.item_name} htmlFor="kcal">
            칼로리
          </label>
          <div className={styles.item_second}>
            <input
              ref={exerciseKcalRef}
              className={styles.item_input}
              type="number"
              id="kcal"
              required={true}
            />
            <label className={styles.item_behind} htmlFor="kcal">
              kcal
            </label>
          </div>
        </div>
        <button onClick={handleOnAddExercise} className={styles.addButton}>
          추가하기
        </button>
      </form>
    </div>
  );
};

export default ExerciseDirectly;

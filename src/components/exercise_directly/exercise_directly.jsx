import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./exercise_directly.module.css";

const ExerciseDirectly = ({ database, uid, addExercise, date, user }) => {
  const exerciseNameRef = useRef();
  const exerciseTimeRef = useRef();
  const exerciseKcalRef = useRef();
  const history = useHistory();

  const handleOnAddExercise = (e) => {
    e.preventDefault();
    const name = exerciseNameRef.current.value;
    const time = Number(exerciseTimeRef.current.value);
    const kcal = Number(exerciseKcalRef.current.value);
    if (name === "" || time === "" || kcal === "") {
      alert("항목을 채워주세요.");
    } else if (time <= 0 && kcal <= 0) {
      alert("운동시간과 칼로리는 양수만 입력할 수 있습니다.");
      exerciseTimeRef.current.value = "";
      exerciseKcalRef.current.value = "";
    } else if (time <= 0) {
      alert("운동시간은 양수만 입력할 수 있습니다.");
      exerciseTimeRef.current.value = "";
    } else if (kcal <= 0) {
      alert("운동 칼로리는 양수만 입력할 수 있습니다.");
      exerciseKcalRef.current.value = "";
    } else {
      const exerciseObj = {
        name,
        kcal,
        time,
      };
      const exerciseId = Date.now();
      const totalCalories = Number(user.userDiary[date].exercise.totalCalories);
      database.addExercise(uid, date, exerciseId, exerciseObj, totalCalories);
      addExercise(date, exerciseId, exerciseObj, totalCalories);
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

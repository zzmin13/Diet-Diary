import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./exercise_edit.module.css";

const ExerciseEdit = (props) => {
  const {
    database,
    history,
    location: { state },
    uid,
    user,
    editExercise,
  } = props;

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
  const exerciseNameRef = useRef();
  const exerciseTimeRef = useRef();
  const exerciseKcalRef = useRef();

  useEffect(() => {
    if (state === undefined) {
      history.push("/main");
    }
  }, []);

  const onEditExercise = (event) => {
    event.preventDefault();
    const name = exerciseNameRef.current.value;
    const kcal = exerciseKcalRef.current.value;
    const time = exerciseTimeRef.current.value;

    const exerciseObj = {
      name,
      kcal,
      time,
    };
    const beforeExerciseKcal = Number(
      user.userDiary[current].exercise[state.exerciseId].kcal
    );
    const afterExerciseKcal = Number(kcal);
    const todayTotalCalories = Number(
      user.userDiary[current].exercise.totalCalories
    );
    database.editExercise(
      uid,
      current,
      state.exerciseId,
      exerciseObj,
      beforeExerciseKcal,
      afterExerciseKcal,
      todayTotalCalories
    );
    editExercise(
      current,
      state.exerciseId,
      exerciseObj,
      beforeExerciseKcal,
      afterExerciseKcal,
      todayTotalCalories
    );
    alert("운동이 수정되었습니다.");
    history.push("/exercise");
  };
  return (
    <>
      {state && user && (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.title}>
              <span>운동 수정하기</span>
              <i className={`fas fa-pen ${styles.icon}`}></i>
            </div>
            <form className={styles.form}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="name">
                    운동명
                  </label>
                  <div className={styles.item_second}>
                    <input
                      ref={exerciseNameRef}
                      defaultValue={
                        user.userDiary[current].exercise[state.exerciseId].name
                      }
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
                      defaultValue={
                        user.userDiary[current].exercise[state.exerciseId].time
                      }
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
                      defaultValue={
                        user.userDiary[current].exercise[state.exerciseId].kcal
                      }
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
              </div>
              <button onClick={onEditExercise} className={styles.addButton}>
                수정하기
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ExerciseEdit;

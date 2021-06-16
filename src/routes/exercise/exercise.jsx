import React from "react";
import styles from "./exercise.module.css";
import ExerciseItem from "../../components/exercise_item/exercise_item";
const Exercise = ({ database, history, uid, user, deleteExercise }) => {
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

  const goExerciseAddPage = () => {
    history.push("/exercise/add");
  };
  return (
    <>
      {user.userDiary ? (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.title}>
              <i className={`fas fa-dumbbell ${styles.icon}`}></i>
              <span>오늘의 운동</span>
            </div>
            <div className={styles.text_column}>
              <div className={styles.text_column_title}>
                <div>
                  <span className={styles.bold}>칼로리 합계</span>
                </div>
                <div className={styles.text_column_title_number}>
                  <span>
                    {user.userDiary[current].exercise.totalCalories
                      ? user.userDiary[current].exercise.totalCalories
                      : 0}{" "}
                  </span>
                  <span> Kcal</span>
                </div>
              </div>
              <div className={styles.text_column_child}>
                <ul>
                  {Object.keys(user.userDiary[current].exercise).map(
                    (element) => {
                      if (element !== "totalCalories") {
                        return (
                          <ExerciseItem
                            database={database}
                            key={element}
                            exerciseId={element}
                            totalCalories={
                              user.userDiary[current].exercise.totalCalories
                            }
                            exercise={user.userDiary[current].exercise[element]}
                            uid={uid}
                            current={current}
                            deleteExercise={deleteExercise}
                          />
                        );
                      }
                    }
                  )}
                </ul>
              </div>
            </div>
            <button onClick={goExerciseAddPage} className={styles.button}>
              운동 추가하기
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Exercise;

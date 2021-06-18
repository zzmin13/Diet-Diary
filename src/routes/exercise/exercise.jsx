import React from "react";
import styles from "./exercise.module.css";
import ExerciseItem from "../../components/exercise_item/exercise_item";
const Exercise = ({
  database,
  history,
  uid,
  user,
  dateObject: { date },
  deleteExercise,
}) => {
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
              <span>
                {date.substring(4, 6)}월 {date.substring(6, 8)}일의 운동
              </span>
            </div>
            <div className={styles.text_column}>
              <div className={styles.text_column_title}>
                <div>
                  <span className={styles.bold}>칼로리 합계</span>
                </div>
                <div className={styles.text_column_title_number}>
                  <span>
                    {user.userDiary[date].exercise.totalCalories
                      ? user.userDiary[date].exercise.totalCalories
                      : 0}{" "}
                  </span>
                  <span> Kcal</span>
                </div>
              </div>
              <div className={styles.text_column_child}>
                <ul>
                  {Object.keys(user.userDiary[date].exercise).map((element) => {
                    if (element !== "totalCalories") {
                      return (
                        <ExerciseItem
                          database={database}
                          key={element}
                          exerciseId={element}
                          totalCalories={
                            user.userDiary[date].exercise.totalCalories
                          }
                          exercise={user.userDiary[date].exercise[element]}
                          uid={uid}
                          current={date}
                          deleteExercise={deleteExercise}
                        />
                      );
                    }
                  })}
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

import React from "react";
import styles from "./exercise.module.css";
import ExerciseItem from "../../components/exercise_item/exercise_item";
import NotDiary from "../../components/not_diary/not_diary";
import { useEffect } from "react";
const Exercise = ({
  database,
  history,
  uid,
  user,
  isUser,
  dateObject: { date },
  deleteExercise,
  loadUserInformation,
}) => {
  const goExerciseSearchPage = () => {
    history.push("/exercise/search");
  };
  const goExerciseDirectlyPage = () => {
    history.push("/exercise/directly");
  };
  const goBackPage = () => {
    history.push("/main");
  };
  useEffect(() => {
    if (!isUser) {
      history.push("/main");
    }
  });
  return (
    <>
      {user ? (
        <div className={styles.container}>
          <div className={styles.main}>
            <button onClick={goBackPage} className={styles.button_back}>
              <i
                className={`fas fa-long-arrow-alt-left ${styles.icon_back}`}
              ></i>
            </button>
            <div className={styles.content}>
              <div className={styles.title}>
                <i className={`fas fa-dumbbell ${styles.icon}`}></i>
                <span>
                  {date.substring(4, 6)}월 {date.substring(6, 8)}일의 운동
                </span>
              </div>
              {user.userDiary[date] ? (
                <>
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
                        {Object.keys(user.userDiary[date].exercise).map(
                          (element) => {
                            if (element !== "totalCalories") {
                              return (
                                <ExerciseItem
                                  database={database}
                                  key={element}
                                  exerciseId={element}
                                  totalCalories={
                                    user.userDiary[date].exercise.totalCalories
                                  }
                                  exercise={
                                    user.userDiary[date].exercise[element]
                                  }
                                  uid={uid}
                                  current={date}
                                  deleteExercise={deleteExercise}
                                />
                              );
                            } else {
                              return null;
                            }
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={goExerciseSearchPage}
                    className={styles.button}
                  >
                    운동 검색하여 추가하기
                  </button>
                  <button
                    onClick={goExerciseDirectlyPage}
                    className={styles.button}
                  >
                    운동 직접 추가하기
                  </button>
                </>
              ) : (
                <>
                  <NotDiary
                    loadUserInformation={loadUserInformation}
                    database={database}
                    uid={uid}
                    date={date}
                    user={user}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Exercise;

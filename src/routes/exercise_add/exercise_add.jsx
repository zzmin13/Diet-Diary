import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./exercise_add.module.css";
import ExerciseSearch from "../../components/exercise_search/exercise_search";
import Loading from "../../components/loading/loading";
const ExerciseAdd = ({ database, uid, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [exercise, setExercise] = useState({});
  const [selectedExercise, setSelectedExercise] = useState({});
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

  useEffect(() => {
    database.getExerciseSampleList().then((response) => {
      if (response !== false) {
        setExercise(response);
        setIsLoading(false);
      }
    });
  }, []);
  const onSelectExercise = useCallback((name) => {
    const selectedExerciseKcal = exercise[name];
    setSelectedExercise({
      name,
      kcal: selectedExerciseKcal,
    });
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.main}>
              <ExerciseSearch
                database={database}
                exercise={exercise}
                uid={uid}
                current={current}
                selectedExercise={selectedExercise}
                onSelectExercise={onSelectExercise}
                user={user}
              />
              <hr className={styles.line} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ExerciseAdd;

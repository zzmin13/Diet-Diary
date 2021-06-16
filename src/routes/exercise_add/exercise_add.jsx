import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./exercise_add.module.css";
import ExerciseSearch from "../../components/exercise_search/exercise_search";
const ExerciseAdd = ({ database }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [exercise, setExercise] = useState({});
  const [selectedExercise, setSelectedExercise] = useState({});
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
        <h1>Loading...</h1>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.main}>
              <ExerciseSearch
                database={database}
                exercise={exercise}
                selectedExercise={selectedExercise}
                onSelectExercise={onSelectExercise}
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

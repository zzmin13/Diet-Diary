import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./exercise_add.module.css";
import ExerciseSearch from "../../components/exercise_search/exercise_search";
import ExerciseDirectly from "../../components/exercise_directly/exercise_directly";

import Loading from "../../components/loading/loading";
const ExerciseAdd = ({
  database,
  uid,
  user,
  addExercise,
  dateObject: { date },
}) => {
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
        <div className={styles.loading_container}>
          <Loading />
        </div>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.main}>
              <ExerciseSearch
                database={database}
                exercise={exercise}
                uid={uid}
                date={date}
                selectedExercise={selectedExercise}
                onSelectExercise={onSelectExercise}
                user={user}
                addExercise={addExercise}
              />
              <hr className={styles.line} />
              <ExerciseDirectly
                database={database}
                uid={uid}
                date={date}
                user={user}
                addExercise={addExercise}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ExerciseAdd;

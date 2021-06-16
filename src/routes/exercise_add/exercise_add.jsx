import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ExerciseSearch from "../../components/exercise_search/exercise_search";
const ExerciseAdd = ({ database }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [exercise, setExercise] = useState({});
  useEffect(() => {
    database.getExerciseSampleList().then((response) => {
      if (response !== false) {
        setExercise(response);
        setIsLoading(false);
      }
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {Object.keys(exercise).map((key, index) => {
            return (
              <ExerciseSearch
                key={index}
                database={database}
                name={key}
                kcal={exercise[key]}
              />
            );
          })}
        </>
      )}
    </>
  );
};
export default ExerciseAdd;

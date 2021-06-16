import React from "react";
import styles from "./exercise_element.module.css";

const ExerciseElement = ({ handleSelectExercise, id, name, kcal }) => {
  const onSelect = (event) => {
    const name = event.currentTarget.value;
    handleSelectExercise(name);
  };
  return (
    <div className={styles.container}>
      <input
        type="radio"
        name="result"
        id={name}
        value={name}
        style={{ display: "none" }}
        className={styles.radio}
        onClick={onSelect}
      />
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
    </div>
  );
};

export default ExerciseElement;

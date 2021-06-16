import React from "react";
import styles from "./exercise_item.module.css";

const ExerciseItem = ({ onSelectExercise, id, name, kcal }) => {
  const onSelect = (event) => {
    const name = event.currentTarget.value;
    onSelectExercise(name);
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

export default ExerciseItem;

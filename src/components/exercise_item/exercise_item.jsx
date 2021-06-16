import React from "react";
import styles from "./exercise_item.module.css";
const ExerciseItem = ({
  database,
  exercise: { name, kcal, time },
  uid,
  current,
}) => {
  return (
    <div className={styles.container}>
      <li className={styles.exercise}>
        <span>{`${name} (${time}분, ${kcal}kcal)`}</span>
      </li>
      <div className={styles.buttons}>
        <button className={styles.edit_button}>
          <i className={`fas fa-pen ${styles.edit_icon}`}></i>
        </button>
        <button className={styles.delete_button}>×</button>
      </div>
    </div>
  );
};

export default ExerciseItem;

import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./exercise_item.module.css";
const ExerciseItem = ({
  database,
  exercise: { name, kcal, time },
  exerciseId,
  totalCalories,
  deleteExercise,
  uid,
  current,
}) => {
  const history = useHistory();
  const handleExerciseDelete = () => {
    const answer = window.confirm("삭제하시겠습니까?");
    if (answer) {
      database.deleteExercise(
        uid,
        current,
        exerciseId,
        Number(kcal),
        Number(totalCalories)
      );
      deleteExercise(current, exerciseId, Number(kcal), Number(totalCalories));
      alert("삭제되었습니다.");
    }
  };
  const goExerciseEditPage = () => {
    history.push({
      pathname: `/exercise/edit/${exerciseId}`,
      state: {
        exerciseId,
        current,
      },
    });
  };
  return (
    <>
      {database ? (
        <div className={styles.container}>
          <li className={styles.exercise}>
            <span>{`${name} (${time}분, ${kcal}kcal)`}</span>
          </li>
          <div className={styles.buttons}>
            <button onClick={goExerciseEditPage} className={styles.edit_button}>
              <i className={`fas fa-pen ${styles.edit_icon}`}></i>
            </button>
            <button
              onClick={handleExerciseDelete}
              className={styles.delete_button}
            >
              ×
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <li className={styles.exercise}>
            <span>{`${name} (${time}분, ${kcal}kcal)`}</span>
          </li>
        </div>
      )}
    </>
  );
};

export default ExerciseItem;

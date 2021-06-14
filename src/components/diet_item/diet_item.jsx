import React from "react";
import styles from "./diet_item.module.css";

const DietItem = (props) => {
  const {
    diet: { kcal, name, totalSize, id },
    time,
    timeTotalCalories,
    todayTotalCalories,
    database,
    uid,
    current,
    deleteDiet,
  } = props;
  const handleDietDelete = () => {
    const answer = window.confirm("삭제하시겠습니까?");
    if (answer) {
      database.deleteDiet(
        uid,
        current,
        time,
        id,
        kcal,
        timeTotalCalories,
        todayTotalCalories
      );
      deleteDiet(
        current,
        time,
        id,
        kcal,
        timeTotalCalories,
        todayTotalCalories
      );
    }
    alert("삭제되었습니다.");
  };
  return (
    <>
      {database ? (
        <div className={styles.container}>
          <li className={styles.diet}>
            <span>{`${name} (${totalSize}g, ${kcal}kcal)`}</span>
          </li>
          <button onClick={handleDietDelete} className={styles.delete_button}>
            ×
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <li className={styles.diet}>
            <span>{`${name} (${totalSize}g, ${kcal}kcal)`}</span>
          </li>
        </div>
      )}
    </>
  );
};

export default DietItem;

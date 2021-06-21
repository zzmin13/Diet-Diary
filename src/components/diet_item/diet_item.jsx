import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./diet_item.module.css";

const DietItem = (props) => {
  const {
    diet: { kcal, name, totalSize, id },
    time,
    timeTotalCalories,
    todayTotalCalories,
    database,
    uid,
    date,
    deleteDiet,
  } = props;
  const history = useHistory();
  const handleDietDelete = () => {
    const answer = window.confirm("삭제하시겠습니까?");
    if (answer) {
      console.log(`uid: ${uid}`);
      console.log(`date: ${date}`);
      console.log(`time: ${time}`);
      console.log(`id: ${id}`);
      console.log(`kcal : ${kcal}`);
      console.log(`timeTotalCalories: ${timeTotalCalories}`);
      console.log(`todayTotalCalories: ${todayTotalCalories}`);
      database.deleteDiet(
        uid,
        date,
        time,
        id,
        kcal,
        timeTotalCalories,
        todayTotalCalories
      );
      deleteDiet(date, time, id, kcal, timeTotalCalories, todayTotalCalories);
      alert("삭제되었습니다.");
    }
  };
  const goDietEditPage = () => {
    history.push({
      pathname: `/diet/edit/${id}`,
      state: {
        dietId: id,
        time,
      },
    });
  };
  return (
    <>
      {database ? (
        <div className={styles.container}>
          <li className={styles.diet}>
            <span>{`${name} (${totalSize}g, ${kcal}kcal)`}</span>
          </li>
          <div className={styles.buttons}>
            <button onClick={goDietEditPage} className={styles.edit_button}>
              <i className={`fas fa-pen ${styles.edit_icon}`}></i>
            </button>
            <button onClick={handleDietDelete} className={styles.delete_button}>
              ×
            </button>
          </div>
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

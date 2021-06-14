import React from "react";
import styles from "./diet_item.module.css";

const DietItem = (props) => {
  const {
    diet: { kcal, name, totalSize },
  } = props;
  const handleDietDelete = () => {};
  return (
    <div className={styles.container}>
      <li className={styles.diet}>
        <span>{`${name} (${totalSize}g, ${kcal}kcal)`}</span>
      </li>
      <button onClick={handleDietDelete} className={styles.delete_button}>
        ×
      </button>
    </div>
  );
};

export default DietItem;

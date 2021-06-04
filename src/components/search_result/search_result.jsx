import React from "react";
import styles from "./search_result.module.css";
const SearchResult = (props) => {
  const {
    result: { name, oneServingSize, kcal, carbohydrates, proteins, fats },
    id,
    onSelectFood,
  } = props;
  const onRadioClick = (event) => {
    onSelectFood(event.target.value);
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.radio}
        type="radio"
        name="searchResult"
        value={id}
        onClick={onRadioClick}
      />
      <div className={styles.box1}>
        {/* <i className={`fas fa-utensils ${styles.icon_cooking}`}></i> */}
        <p className={styles.name}>{name}</p>
        <p className={styles.amount}>{`${oneServingSize}g `}</p>
      </div>
      <div className={styles.box2}>
        <p className={styles.calories}>{`${kcal} kcal`}</p>
      </div>
    </div>
  );
};

export default SearchResult;

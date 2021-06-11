import React from "react";
import styles from "./search_result.module.css";
const SearchResult = (props) => {
  const {
    result: { name },
    id,
    onSelectFood,
  } = props;
  const onRadioClick = (event) => {
    onSelectFood(event.target.value);
  };
  return (
    <div className={styles.container}>
      <input
        type="radio"
        name="searchResult"
        value={id}
        onClick={onRadioClick}
        id={id}
        style={{ display: "none" }}
      />
      <label htmlFor={id} className={styles.label}>
        {name}
      </label>
    </div>
  );
};

export default SearchResult;

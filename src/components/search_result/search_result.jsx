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
    <>
      <input
        type="radio"
        name="searchResult"
        value={id}
        onClick={onRadioClick}
      />
      <div className={styles.container}>
        <h1>{`이름: ${name}`}</h1>
        <span>{`1회 제공량(g): ${oneServingSize} `}</span>
        <span>{`열량(kcal) : ${kcal} `}</span>
        <span>{`탄수화물: ${carbohydrates} `}</span>
        <span>{`단백질: ${proteins} `}</span>
        <span>{`지방: ${fats} `}</span>
      </div>
    </>
  );
};

export default SearchResult;

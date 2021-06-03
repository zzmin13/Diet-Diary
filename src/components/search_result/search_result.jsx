import React from "react";

const SearchResult = (props) => {
  const {
    result: { name, oneServingSize, kcal, carbohydrates, proteins, fats },
  } = props;
  return (
    <>
      <h1>{`이름: ${name}`}</h1>
      <h1>{`1회 제공량(g): ${oneServingSize}`}</h1>
      <h1>{`열량(kcal) : ${kcal}`}</h1>
      <h1>{`탄수화물: ${carbohydrates}`}</h1>
      <h1>{`단백질: ${proteins}`}</h1>
      <h1>{`지방: ${fats}`}</h1>
    </>
  );
};

export default SearchResult;

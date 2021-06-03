import React from "react";

const DietItem = (props) => {
  const {
    food: { totalSize, kcal, id, name },
  } = props;
  return (
    <>
      <span>{name}</span>
      <span>{totalSize}</span>
      <span>{kcal}</span>
    </>
  );
};

export default DietItem;

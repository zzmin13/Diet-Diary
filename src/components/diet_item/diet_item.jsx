import React from "react";

const DietItem = (props) => {
  const {
    food: { amount, calories, id, name },
  } = props;
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
      <span>{calories}</span>
    </>
  );
};

export default DietItem;

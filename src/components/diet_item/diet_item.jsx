import React from "react";

const DietItem = (props) => {
  const {
    diet: { kcal, name, totalSize },
  } = props;
  return <li>{`${name} (${totalSize}g, ${kcal}kcal)`}</li>;
};

export default DietItem;

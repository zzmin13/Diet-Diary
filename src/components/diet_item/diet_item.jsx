import React from "react";
import styles from "./diet_item.module.css";
const DietItem = (props) => {
  // const {
  //   food: { totalSize, kcal, id, name },
  // } = props;
  // return (
  //   <>
  //     <span>{name}</span>
  //     <span>{totalSize}</span>
  //     <span>{kcal}</span>
  //   </>
  // );
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <i className={`fas fa-utensils ${styles.icon_cooking}`}></i>
        <p className={styles.name}>햄버거</p>
        <p className={styles.amount}>250g</p>
      </div>
      <div className={styles.box2}>
        <p className={styles.calories}>450kcal</p>
      </div>
      <div className={styles.box3}>
        <i className={`fas fa-trash-alt ${styles.icon_trash}`}></i>
      </div>
    </div>
  );
};

export default DietItem;

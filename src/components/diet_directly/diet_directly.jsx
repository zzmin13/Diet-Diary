import React from "react";
import styles from "./diet_directly.module.css";
const DietDirectly = ({ database, loadUserInformation, uid, user }) => {
  // 식사 직접 추가하는 컴포넌트
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>직접 추가하기</h1>
      <form className={styles.form}>
        <div className={styles.item}>
          <label className={styles.item_name} htmlFor="name">
            음식명
          </label>
          <div className={styles.item_second}>
            <input className={styles.item_input} type="text" id="name" />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.item_name} htmlFor="amount">
            음식량
          </label>
          <div className={styles.item_second}>
            <input className={styles.item_input} type="text" id="amount" />
            <label className={styles.item_behind} htmlFor="amount">
              g
            </label>
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.item_name} htmlFor="kcal">
            칼로리
          </label>
          <div className={styles.item_second}>
            <input className={styles.item_input} type="text" id="kcal" />
            <label className={styles.item_behind} htmlFor="kcal">
              kcal
            </label>
          </div>
        </div>
        <button className={styles.addButton}>추가하기</button>
      </form>
    </div>
  );
};
export default DietDirectly;

import React from "react";
import styles from "./diet_directly.module.css";
const DietDirectly = ({ database, loadUserInformation, uid, user }) => {
  // 식사 직접 추가하는 컴포넌트
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>직접 추가하기</h1>;
      <form>
        <div>
          <label htmlFor="name">음식명</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="amount">음식량</label>
          <input type="text" id="amount" />
          <label htmlFor="amount">g</label>
        </div>
        <div>
          <label htmlFor="kcal">칼로리</label>
          <input type="text" id="kcal" />
          <label htmlFor="kcal">kcal</label>
        </div>
        <button>추가하기</button>
      </form>
    </div>
  );
};
export default DietDirectly;

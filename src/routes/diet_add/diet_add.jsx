import React from "react";
import DietSearch from "../../components/diet_search/diet_search";
import styles from "./diet_add.module.css";
const DietAdd = ({ database, foodSearch, loadUserInformation, uid, user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <DietSearch
          database={database}
          foodSearch={foodSearch}
          loadUserInformation={loadUserInformation}
          uid={uid}
          user={user}
        />
        <hr className={styles.line} />
        <form className={styles.item}>
          <h1>직접 추가하기</h1>
        </form>
      </div>
    </div>
  );
};

export default DietAdd;

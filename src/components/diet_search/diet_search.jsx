import React from "react";
import styles from "./diet_search.module.css";
const DietSearch = ({
  database,
  foodSearch,
  loadUserInformation,
  uid,
  user,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>식사 검색하기</h1>
      <form className={styles.form}>
        <input type="search" className={styles.input} />
        <button className={styles.search_button}>
          <i className={`fas fa-search ${styles.search_icon}`}></i>
        </button>
      </form>
      <div className={styles.result}>
        <h1 className={styles.result_title}>검색 결과</h1>
        <div className={styles.result_item}></div>
      </div>
      <div className={styles.select}>
        <h1 className={styles.select_title}>선택된 항목</h1>
      </div>
    </div>
  );
};

export default DietSearch;

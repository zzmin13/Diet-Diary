import React from "react";
import { useEffect } from "react";
import styles from "./water_add.module.css";

const WaterAdd = ({ authService, history }) => {
  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (!USER) {
        history.push("/");
      }
    });
  });
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <span>물 추가하기</span>
        </div>
      </div>
    </div>
  );
};

export default WaterAdd;

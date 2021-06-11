import React from "react";
import styles from "./loading.module.css";
const Loading = (props) => {
  return (
    <>
      <div className={styles.loading_circle}></div>
      <h1>Loading...</h1>
    </>
  );
};
export default Loading;

import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className={`fas fa-book ${styles.icon}`}></i>
        <h1 className={styles.title}>Diet Diary</h1>
      </div>
      <ul className={styles.navbar}>
        <li className={styles.navbar_item}>로그인</li>
        <li className={styles.navbar_item}>회원가입</li>
      </ul>
    </header>
  );
};

export default Header;

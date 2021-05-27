import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Link to={{ pathname: "/" }} className={styles.logo}>
        <i className={`fas fa-book ${styles.icon}`}></i>
        <h1 className={styles.title}>Diet Diary</h1>
      </Link>
      <ul className={styles.navbar}>
        <li className={styles.navbar_item}>
          <Link
            to={{
              pathname: "/login",
            }}
          >
            로그인
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link
            to={{
              pathname: "/join",
            }}
          >
            회원가입
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

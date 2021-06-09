import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./loginHeader.module.css";
const LoginHeader = memo((props) => {
  const { authService, logoutUser } = props;
  const handleLogout = () => {
    authService.logout();
    logoutUser();
  };
  return (
    <>
      <header className={styles.header}>
        <Link to={{ pathname: "/main" }} className={styles.logo}>
          <i className={`fas fa-book ${styles.icon}`}></i>
          <h1 className={styles.title}>Diet Diary</h1>
        </Link>
        <ul className={styles.navbar}>
          <li onClick={handleLogout} className={styles.navbar_item}>
            로그아웃
          </li>
        </ul>
      </header>
    </>
  );
});

export default LoginHeader;

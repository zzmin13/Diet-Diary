import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./loginHeader.module.css";
const LoginHeader = (props) => {
  const { authService } = props;
  const history = useHistory();
  const handleLogout = () => {
    authService.logout();
    history.push("/");
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
};

export default LoginHeader;

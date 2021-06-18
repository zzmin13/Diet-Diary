import React, { memo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./loginHeader.module.css";
const LoginHeader = memo((props) => {
  const { authService, logoutUser, user } = props;
  const [display, setDisplay] = useState(styles.invisible);

  const handleLogout = () => {
    authService.logout();
    logoutUser();
  };
  const showUserBox = () => {
    if (display === styles.visible) {
      setDisplay(styles.invisible);
    } else {
      setDisplay(styles.visible);
    }
  };
  return (
    <>
      <header className={styles.header}>
        <Link to={{ pathname: "/main" }} className={styles.logo}>
          <i className={`fas fa-book ${styles.icon}`}></i>
          <h1 className={styles.title}>Diet Diary</h1>
        </Link>
        <ul className={styles.navbar}>
          <li className={styles.navbar_item}>
            <img
              className={styles.avatar}
              src={
                user.information
                  ? user.information.basic.avatar
                    ? user.information.basic.avatar
                    : `https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg`
                  : "https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg"
              }
              alt="avatar"
              onClick={showUserBox}
            />
          </li>
        </ul>
        <ul className={`${styles.userBox} ${display}`}>
          <li onClick={handleLogout} className={styles.userBox_item}>
            <i className={`fas fa-sign-out-alt ${styles.icon_logout}`}></i>
            <span className={styles.userBox_item_text}>Logout</span>
          </li>
          <li className={styles.userBox_item}>
            <i className={`fas fa-user ${styles.icon_mypage}`}></i>
            <span className={styles.userBox_item_text}>My Page</span>
          </li>
        </ul>
      </header>
    </>
  );
});

export default LoginHeader;

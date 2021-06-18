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
            {user.information ? (
              <img
                className={styles.avatar}
                src={
                  user.information.basic.avatar
                    ? user.information.basic.avatar
                    : `https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg`
                }
                alt="avatar"
                onClick={showUserBox}
              />
            ) : null}
          </li>
        </ul>
        {user.information ? (
          <div className={`${styles.userBox} ${display}`}>
            <div className={styles.profile}>
              <img
                className={`${styles.avatar} ${styles.avatar_userBox}`}
                src={
                  user.information.basic.avatar
                    ? user.information.basic.avatar
                    : `https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg`
                }
                alt="avatar"
              />
              <h1 className={styles.email}>{user.information.basic.email}</h1>
            </div>
            <ul>
              <li onClick={handleLogout} className={styles.userBox_item}>
                <i className={`fas fa-sign-out-alt ${styles.icon_logout}`}></i>
                <span className={styles.userBox_item_text}>로그아웃</span>
              </li>
              <li className={styles.userBox_item}>
                <i className={`fas fa-user ${styles.icon_mypage}`}></i>
                <span className={styles.userBox_item_text}>마이 페이지</span>
              </li>
            </ul>
          </div>
        ) : null}
      </header>
    </>
  );
});

export default LoginHeader;

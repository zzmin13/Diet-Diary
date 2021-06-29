import React, { memo } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./loginHeader.module.css";
const LoginHeader = memo((props) => {
  const { authService, logoutUser, profile } = props;
  const [display, setDisplay] = useState(styles.invisible);
  const history = useHistory();
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
  const goMyPage = () => {
    history.push("/mypage");
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
            {profile ? (
              <img
                className={styles.avatar}
                src={
                  profile.photoURL
                    ? profile.photoURL
                    : `https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg`
                }
                alt="avatar"
                onClick={showUserBox}
              />
            ) : null}
          </li>
        </ul>
        {profile ? (
          <div className={`${styles.userBox} ${display}`}>
            <div className={styles.profile}>
              <img
                className={`${styles.avatar} ${styles.avatar_userBox}`}
                src={
                  profile.photoURL
                    ? profile.photoURL
                    : `https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg`
                }
                alt="avatar"
              />
              <h1 className={styles.email}>{profile.email}</h1>
            </div>
            <ul>
              <li onClick={handleLogout} className={styles.userBox_item}>
                <i className={`fas fa-sign-out-alt ${styles.icon_logout}`}></i>
                <span className={styles.userBox_item_text}>로그아웃</span>
              </li>
              <li onClick={goMyPage} className={styles.userBox_item}>
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

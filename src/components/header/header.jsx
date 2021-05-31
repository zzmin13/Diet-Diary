import React, { memo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Join from "../../routes/join/join";
import Login from "../../routes/login/login";
import styles from "./header.module.css";

const Header = memo((props) => {
  const { authService } = props;
  const changeToLogin = () => {
    setModalTarget("login");
  };
  const changeToJoin = () => {
    setModalTarget("join");
  };
  window.onclick = (event) => {
    if (event.target.className === `${styles.modal}`) {
      setModalDisplay(false);
    }
  };
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalTarget, setModalTarget] = useState(null);
  const modalRef = useRef();

  const closeModal = () => {
    setModalDisplay(false);
  };
  const showLoginPopup = (event) => {
    setModalDisplay(styles.block);
    setModalTarget("login");
  };
  const showJoinPopup = (event) => {
    setModalDisplay(styles.block);
    setModalTarget("join");
  };
  console.log(`header`);
  return (
    <>
      <header className={styles.header}>
        <Link to={{ pathname: "/" }} className={styles.logo}>
          <i className={`fas fa-book ${styles.icon}`}></i>
          <h1 className={styles.title}>Diet Diary</h1>
        </Link>
        <ul className={styles.navbar}>
          <li onClick={showLoginPopup} className={styles.navbar_item}>
            로그인
          </li>
          <li onClick={showJoinPopup} className={styles.navbar_item}>
            회원가입
          </li>
        </ul>
      </header>
      {modalDisplay ? (
        <div className={`${styles.modal}`}>
          <div className={styles.modal_content}>
            <span onClick={closeModal} className={styles.close}>
              &times;
            </span>
            <div ref={modalRef}>
              {modalTarget === "login" ? (
                <Login
                  authService={authService}
                  changeToJoin={changeToJoin}
                  closeModal={closeModal}
                />
              ) : (
                <Join
                  authService={authService}
                  changeToLogin={changeToLogin}
                  closeModal={closeModal}
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
});

export default Header;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Join from "../../routes/join/join";
import Login from "../../routes/login/login";
import styles from "./header.module.css";

const Header = (props) => {
  const changeToLogin = () => {
    setModalTarget("login");
  };
  const changeToJoin = () => {
    setModalTarget("join");
  };
  window.onclick = (event) => {
    if (event.target.className === `${styles.modal} ${modalDisplay}`) {
      setModalDisplay(styles.none);
    }
  };
  const [modalDisplay, setModalDisplay] = useState(styles.none);
  const [modalTarget, setModalTarget] = useState(null);
  const modalRef = useRef();

  const closeModal = () => {
    setModalDisplay(styles.none);
  };
  const showLoginPopup = (event) => {
    setModalDisplay(styles.block);
    setModalTarget("login");
  };
  const showJoinPopup = (event) => {
    setModalDisplay(styles.block);
    setModalTarget("join");
  };

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
      <div className={`${styles.modal} ${modalDisplay}`}>
        <div className={styles.modal_content}>
          <span onClick={closeModal} className={styles.close}>
            &times;
          </span>
          <div ref={modalRef}>
            {modalTarget === "login" ? (
              <Login changeToJoin={changeToJoin} closeModal={closeModal} />
            ) : (
              <Join changeToLogin={changeToLogin} closeModal={closeModal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

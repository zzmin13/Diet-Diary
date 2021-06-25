import React from "react";
import styles from "./mypage.module.css";
const Mypage = ({ isUser, user, history }) => {
  const goAccountPage = () => {
    history.push("/mypage/account");
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.user}>
          <img
            className={styles.avatar}
            src={user.information.basic.avatar}
            alt="avatar"
          />
          <h1 className={styles.userName}>
            {user.information.basic.userName
              ? user.information.basic.userName
              : "user"}
          </h1>
          <h1 className={styles.email}>{user.information.basic.email}</h1>
        </div>
        <div className={styles.button_box}>
          <button onClick={goAccountPage} className={styles.button}>
            <div className={styles.icon_box}>
              <i
                className={`fas fa-user-cog ${styles.icon} ${styles.icon_account}`}
              ></i>
            </div>
            <p className={styles.button_text}>계정 설정</p>
          </button>
          <button className={styles.button}>
            <div className={styles.icon_box}>
              <i
                className={`fas fa-lock ${styles.icon} ${styles.icon_password}`}
              ></i>
            </div>
            <p className={styles.button_text}>비밀번호 변경</p>
          </button>
          <button className={styles.button}>
            <div className={styles.icon_box}>
              <i
                className={`fas fa-running ${styles.icon} ${styles.icon_health}`}
              ></i>
            </div>
            <p className={styles.button_text}>건강 정보 설정</p>
          </button>
          <button className={styles.button}>
            <div className={styles.icon_box}>
              <i
                className={`fas fa-user-times ${styles.icon} ${styles.icon_withdrawal}`}
              ></i>
            </div>
            <p className={styles.button_text}>회원 탈퇴</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mypage;

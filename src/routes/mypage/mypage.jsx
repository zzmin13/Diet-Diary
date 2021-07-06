import React from "react";
import { useEffect } from "react";
import styles from "./mypage.module.css";
const Mypage = ({ profile, history, isUser }) => {
  const goAccountPage = () => {
    history.push("/mypage/account");
  };
  const goHealthPage = () => {
    history.push("/mypage/health");
  };
  const goWithdrawalPage = () => {
    history.push("/mypage/withdrawal");
  };
  const goChangePasswordPage = () => {
    history.push("/mypage/changepassword");
  };
  const cannotChangePassword = () => {
    alert("SNS를 통해 가입한 계정은 비밀번호 변경이 불가합니다.");
  };
  useEffect(() => {
    if (!isUser) {
      history.push("/");
    }
  });
  return (
    <>
      {profile ? (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.user}>
              <img
                className={styles.avatar}
                src={
                  profile.photoURL
                    ? profile.photoURL
                    : `https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg`
                }
                alt="avatar"
              />
              <h1 className={styles.userName}>
                {profile.displayName ? profile.displayName : "user"}
              </h1>
              <h1 className={styles.email}>{profile.email}</h1>
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
              {profile.providerData[0].providerId === "password" ? (
                <button
                  onClick={goChangePasswordPage}
                  className={styles.button}
                >
                  <div className={styles.icon_box}>
                    <i
                      className={`fas fa-lock ${styles.icon} ${styles.icon_password}`}
                    ></i>
                  </div>
                  <p className={styles.button_text}>비밀번호 변경</p>
                </button>
              ) : (
                <button
                  onClick={cannotChangePassword}
                  className={styles.button}
                >
                  <div className={styles.icon_box}>
                    <i
                      className={`fas fa-lock ${styles.icon} ${styles.icon_password}`}
                    ></i>
                  </div>
                  <p className={styles.button_text}>비밀번호 변경</p>
                </button>
              )}
              <button onClick={goHealthPage} className={styles.button}>
                <div className={styles.icon_box}>
                  <i
                    className={`fas fa-running ${styles.icon} ${styles.icon_health}`}
                  ></i>
                </div>
                <p className={styles.button_text}>건강 정보 설정</p>
              </button>
              <button onClick={goWithdrawalPage} className={styles.button}>
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
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Mypage;

import React from "react";
import { useEffect } from "react";
import styles from "./find_sent.module.css";
const FindSent = ({ history, location }) => {
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);
  const goHome = () => {
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <i className={`fas fa-check-circle ${styles.icon_check}`}></i>
      <h1 className={styles.title}>재설정 이메일이 전송됨</h1>
      <div className={styles.text}>
        <p className={styles.text_element}>
          <span className={styles.text_email}>{location.state.email}</span>으로
          메일이 전송되었습니다.
        </p>
        <p className={styles.text_element_small}>
          일부 메일은 메일 수신까지 시간이 소요될 수도 있습니다.
        </p>
        <p className={styles.text_element_small}>
          메일에 있는 링크를 통해 비밀번호를 재설정하세요.
        </p>
      </div>
      <button onClick={goHome} className={styles.button_backMain}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default FindSent;

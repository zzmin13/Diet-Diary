import React from "react";
import { useEffect } from "react";
import styles from "./withdrawal_done.module.css";
const WithdrawalDone = ({ history, location }) => {
  const goHome = () => {
    history.push("/");
  };
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);
  return (
    <div className={styles.container}>
      <i className={`fas fa-check-circle ${styles.icon_check}`}></i>
      <h1 className={styles.title}>회원탈퇴가 완료됨</h1>
      <div className={styles.text}>
        <p className={styles.text_element}>회원탈퇴가 완료되었습니다.</p>
        <p className={styles.text_element_small}>
          그동안 다다를 이용해주셔서 감사합니다.
        </p>
        <p className={styles.text_element_small}>
          보다 나은 서비스로 다시 찾아뵙겠습니다.
        </p>
      </div>
      <button onClick={goHome} className={styles.button_backMain}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default WithdrawalDone;

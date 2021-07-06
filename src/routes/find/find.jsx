import React from "react";
import styles from "./find.module.css";

const Find = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>비밀번호를 잊어버리셨나요?</h1>
      <form className={styles.form}>
        <div className={styles.text}>
          <p className={styles.text_element}>
            다다에 가입했던 이메일을 입력해주세요.
          </p>
          <p className={styles.text_element}>
            비밀번호 재설정 이메일을 보내드립니다.
          </p>
        </div>
        <input
          type="email"
          required={true}
          className={styles.input}
          placeholder="이메일"
        />
        <button className={styles.button_submit}>재설정 메일 보내기</button>
      </form>
    </div>
  );
};

export default Find;

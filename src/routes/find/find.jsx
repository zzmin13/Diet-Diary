import React from "react";
import { useRef } from "react";
import styles from "./find.module.css";

const Find = ({ authService, history }) => {
  const emailRef = useRef();
  const sendSuccess = () => {
    alert("비밀번호 재설정 이메일이 성공적으로 전송되었습니다!");
    history.push({
      pathname: "/find/sent",
      state: {
        email: emailRef.current.value,
      },
    });
  };
  const sendFail = (error) => {
    if (error.code === "auth/user-not-found") {
      alert("존재하지 않는 이메일입니다.");
    } else {
      alert(error.message);
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    authService.sendPasswordResetEmail(email, sendSuccess, sendFail);
  };
  return (
    <div className={styles.container}>
      <i className={`fas fa-unlock ${styles.icon_lock}`}></i>
      <h1 className={styles.title}>비밀번호를 잊어버리셨나요?</h1>
      <form className={styles.form} onSubmit={handleOnSubmit}>
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
          ref={emailRef}
        />
        <button className={styles.button_submit}>재설정 메일 보내기</button>
      </form>
    </div>
  );
};

export default Find;

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/social_login/social_login";
import styles from "./login.module.css";
const Login = (props) => {
  const { authService } = props;
  const text1 = "소셜계정으로 간편하게 로그인하세요!";
  const text2 = "아직 회원이 아니신가요?";
  const text3 = "가입하기";

  const emailRef = useRef();
  const passwordRef = useRef();

  const historyPushJoin = () => {
    props.history.push("/join");
  };
  const closeModal = () => {
    if (props.closeModal) {
      props.closeModal();
    }
  };
  const goLogin = async () => {
    if (props.closeModal) {
      closeModal();
    }
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await authService.emailLogin(email, password);
    console.log(response);
  };
  console.log(`login`);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="email"
            ref={emailRef}
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            onClick={goLogin}
            className={`${styles.loginButton} ${styles.button}`}
          >
            로그인
          </button>
          <div className={styles.textBox}>
            <Link
              to={{
                pathname: "/join",
              }}
            >
              <span className={styles.join}>Join</span>
            </Link>
            <Link
              to={{
                pathname: "/find",
              }}
            >
              <span className={styles.forgot}>Forgot your ID / Password?</span>
            </Link>
          </div>
        </form>
        <div className={styles.lineBox}>
          <hr className={styles.line} />
          <span className={styles.or}>OR</span>
          <hr className={styles.line} />
        </div>
        <SocialLogin
          text1={text1}
          text2={text2}
          text3={text3}
          authService={authService}
          handleOnClick={
            props.changeToJoin ? props.changeToJoin : historyPushJoin
          }
          closeModal={closeModal}
        />
      </div>
    </section>
  );
};

export default Login;

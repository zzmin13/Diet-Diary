import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
const Login = (props) => {
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
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className={`${styles.loginButton} ${styles.button}`}>
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
        <button
          type="button"
          name="Github"
          className={`${styles.socialLogin} ${styles.button} ${styles.github}`}
        >
          <i className={`fab fa-github ${styles.socialIcon}`}></i>
          깃허브로 로그인 →
        </button>
        <button
          type="button"
          name="Google"
          className={`${styles.socialLogin} ${styles.button} ${styles.google}`}
        >
          <i className={`fab fa-google ${styles.socialIcon}`}></i>
          구글로 로그인 →
        </button>
      </div>
    </section>
  );
};

export default Login;

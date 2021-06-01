import React, { useEffect, useRef } from "react";
import styles from "./join.module.css";
import SocialLogin from "../../components/social_login/social_login";
import { useHistory } from "react-router";
const Join = (props) => {
  const { authService } = props;
  const history = useHistory();
  const text1 = "소셜계정으로 간편하게 가입하세요!";
  const text2 = "이미 회원이신가요?";
  const text3 = "로그인하기";
  console.log(props);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        history.push("/main");
      }
    });
  }, []);
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const alertRef = useRef();
  const signUp = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const password2 = password2Ref.current.value;
    console.log(email);
    console.log(password);
    console.log(password2);

    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (!checkPassword(password)) {
      alert(
        "비밀번호는 8~15자리의 영문, 숫자, 특수문자를 모두 포함하여야 합니다."
      );
    } else {
      await authService.createAccount(email, password);

      // history.push("/main");
    }
  };
  const checkPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{8,15}.$/.test(
      password
    );
  };
  const historyPushLogin = () => {
    props.history.push("/login");
  };
  console.log(`join`);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Join</h1>
          <form className={styles.form}>
            <div className={styles.inputBox}>
              <input
                ref={emailRef}
                className={styles.input}
                type="email"
                name="email"
                required
              />
              <label className={styles.label}>
                <span className={styles.label_content}>이메일</span>
              </label>
            </div>
            <div className={styles.inputBox}>
              <input
                ref={passwordRef}
                className={styles.input}
                type="password"
                name="password"
                required
              />
              <label className={styles.label}>
                <span className={styles.label_content}>비밀번호</span>
              </label>
            </div>
            <div className={styles.inputBox}>
              <input
                ref={password2Ref}
                className={styles.input}
                type="password"
                name="password2"
                required
              />
              <label className={styles.label}>
                <span className={styles.label_content}>비밀번호 확인</span>
              </label>
            </div>
            <button
              onClick={signUp}
              className={styles.joinButton}
              type="button"
            >
              가입하기
            </button>
            <h6 ref={alertRef} className={styles.alertMessage}>
              {" "}
            </h6>
            {/* <div className={styles.healthInfo}>
              <input
                className={styles.healthInput}
                type="number"
                name="age"
                placeholder="age"
                required
              />
              <select className={styles.healthInput} name="sex">
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
              <input
                className={styles.healthInput}
                type="number"
                name="height"
                placeholder="height"
                required
              />
              <input
                className={styles.healthInput}
                type="number"
                name="weight"
                placeholder="weight"
                required
              />
              <select className={styles.healthInput} name="activity">
                <option value="large">활발하게 활동적</option>
                <option value="medium">중간 정도 활동적</option>
                <option value="small">조금 활동적</option>
              </select>
            </div> */}
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
            handleOnClick={
              props.changeToLogin ? props.changeToLogin : historyPushLogin
            }
          />
        </div>
      </section>
    </>
  );
};

export default Join;

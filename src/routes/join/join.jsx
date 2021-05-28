import React from "react";
import styles from "./join.module.css";
import SocialLogin from "../../components/social_login/social_login";
const Join = (props) => {
  const text1 = "소셜계정으로 간편하게 가입하세요!";
  const text2 = "이미 회원이신가요?";
  const text3 = "로그인하기";
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Join</h1>
          <form className={styles.form}>
            <div className={styles.inputBox}>
              <input
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
                className={styles.input}
                type="password"
                name="password"
                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{8,16}$"
                required
              />
              <label className={styles.label}>
                <span className={styles.label_content}>비밀번호</span>
              </label>
            </div>
            <div className={styles.inputBox}>
              <input
                className={styles.input}
                type="password"
                name="password2"
                required
              />
              <label className={styles.label}>
                <span className={styles.label_content}>비밀번호 확인</span>
              </label>
            </div>
            <button className={styles.joinButton} type="button">
              가입하기
            </button>
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
          <SocialLogin text1={text1} text2={text2} text3={text3} />
        </div>
      </section>
    </>
  );
};

export default Join;

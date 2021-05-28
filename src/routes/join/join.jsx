import React from "react";
import styles from "./join.module.css";
const Join = (props) => {
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
            <input
              className={styles.input}
              type="number"
              name="age"
              placeholder="age"
              required
            />
            <select className={styles.input} name="sex">
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
            <input
              className={styles.input}
              type="number"
              name="height"
              placeholder="height"
              required
            />
            <input
              className={styles.input}
              type="number"
              name="weight"
              placeholder="weight"
              required
            />
            <select className={styles.input} name="activity">
              <option value="large">활발하게 활동적</option>
              <option value="medium">중간 정도 활동적</option>
              <option value="small">조금 활동적</option>
            </select>
          </form>
        </div>
      </section>
    </>
  );
};

export default Join;

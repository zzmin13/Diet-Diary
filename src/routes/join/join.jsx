import React from "react";
import styles from "./join.module.css";
const Join = (props) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Join</h1>
          <form className={styles.form}>
            <label htmlFor="email">이메일</label>
            <input
              className={styles.input}
              id="email"
              type="email"
              name="email"
              placeholder="email"
            />
            <label htmlFor="password">비밀번호</label>
            <input
              className={styles.input}
              id="password"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <label htmlFor="password2">비밀번호 확인</label>
            <input
              className={styles.input}
              id="password2"
              type="password2"
              name="password2"
              placeholder="Verify Password"
            />
            <input
              className={styles.input}
              type="number"
              name="age"
              placeholder="age"
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
            />
            <input
              className={styles.input}
              type="number"
              name="weight"
              placeholder="weight"
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

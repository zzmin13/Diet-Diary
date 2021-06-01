import React from "react";
import styles from "./register.module.css";

const Register = (props) => {
  return (
    <>
      <div className={styles.section}>
        <input
          className={styles.slide}
          type="radio"
          name="slide"
          id="slide01"
          defaultChecked
        />
        <input
          className={styles.slide}
          type="radio"
          name="slide"
          id="slide02"
        />
        <input
          className={styles.slide}
          type="radio"
          name="slide"
          id="slide03"
        />
        <ul className={styles.slidelist}>
          <li>
            {/* <label
              htmlFor="slide03"
              className={`${styles.left} ${styles.label}`}
            >
              <i className={`fas fa-chevron-left`}></i>
            </label> */}
            <div className={styles.image}>hello</div>
            <label
              htmlFor="slide02"
              className={`${styles.right} ${styles.label}`}
            >
              <i className={`fas fa-chevron-right`}></i>
            </label>
          </li>
          <li>
            <label
              htmlFor="slide01"
              className={`${styles.left} ${styles.label}`}
            >
              <i className={`fas fa-chevron-left`}></i>
            </label>
            <div className={styles.image}>nice</div>
            <label
              htmlFor="slide03"
              className={`${styles.right} ${styles.label}`}
            >
              <i className={`fas fa-chevron-right`}></i>
            </label>
          </li>
          <li>
            <label
              htmlFor="slide02"
              className={`${styles.left} ${styles.label}`}
            >
              <i className={`fas fa-chevron-left`}></i>
            </label>
            <div className={styles.image}>hi</div>
            {/* <label
              htmlFor="slide01"
              className={`${styles.right} ${styles.label}`}
            >
              <i className={`fas fa-chevron-right`}></i>
            </label> */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Register;

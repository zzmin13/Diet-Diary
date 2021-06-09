import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const { loginUser, current } = props;
  return (
    <ul className={styles.navbar}>
      <li className={styles.item}>
        <Link
          to={{
            pathname: "/main",
          }}
          className={styles.item_content}
        >
          <i className={`fas fa-home ${styles.item_icon}`}></i>
          <span className={styles.item_text}>홈</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to={{
            pathname: "/diary",
            state: {
              uid: loginUser.uid,
              todayDiary: loginUser.userDiary[current].diary,
              currentDate: current,
            },
          }}
          className={styles.item_content}
        >
          <i className={`fas fa-book ${styles.item_icon}`}></i>
          <span className={styles.item_text}>일기</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to={{
            pathname: "/diet",
            state: {
              uid: loginUser.uid,
              todayDiet: loginUser.userDiary[current].diet,
              currentDate: current,
            },
          }}
          className={styles.item_content}
        >
          <i className={`fas fa-utensils ${styles.item_icon}`}></i>
          <span className={styles.item_text}>식사</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to={{
            pathname: "/water",
            state: {
              uid: loginUser.uid,
            },
          }}
          className={styles.item_content}
        >
          <i className={`fas fa-tint ${styles.item_icon}`}></i>
          <span className={styles.item_text}>물</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to={{
            pathname: "/exercise",
            state: {
              uid: loginUser.uid,
            },
          }}
          className={styles.item_content}
        >
          <i className={`fas fa-dumbbell ${styles.item_icon}`}></i>
          <span className={styles.item_text}>운동</span>
        </Link>
      </li>
    </ul>
  );
};
export default Navbar;

import React from "react";
import styles from "./calendar_head.module.css";

const CalendarHead = ({ calendarDate, increaseMonth, decreaseMonth }) => {
  return (
    <div className={styles.container}>
      <div className={styles.month}>
        <button onClick={decreaseMonth} className={styles.button}>
          <i className={`fas fa-angle-left ${styles.icon}`}></i>
        </button>
        <p className={styles.month_text}>
          {calendarDate.format(`YYYY년 MM월`)}
        </p>
        <button onClick={increaseMonth} className={styles.button}>
          <i className={`fas fa-angle-right ${styles.icon}`}></i>
        </button>
      </div>
      <div className={styles.week}>
        <span className={styles.day}>일</span>
        <span className={styles.day}>월</span>
        <span className={styles.day}>화</span>
        <span className={styles.day}>수</span>
        <span className={styles.day}>목</span>
        <span className={styles.day}>금</span>
        <span className={styles.day}>토</span>
      </div>
    </div>
  );
};

export default CalendarHead;

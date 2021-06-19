import React from "react";
import styles from "./calendar_body.module.css";

const CalendarBody = ({ calendarDate }) => {
  const week = Array.from(new Array(6), () => new Array());
  const firstDateOfMonth = calendarDate
    .clone()
    .startOf("month")
    .startOf("week");
  const firstDateOfMonthClone = firstDateOfMonth.clone();
  for (let i = 0; i < 42; i++) {
    if (i === 0) {
      week[Math.floor(i / 7)].push(firstDateOfMonthClone.format("YYYYMMDD"));
    } else {
      week[Math.floor(i / 7)].push(
        firstDateOfMonthClone.add(1, "d").format("YYYYMMDD")
      );
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.week}>
        {week[0].map((element, index) => (
          <span key={index} className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week}>
        {week[1].map((element, index) => (
          <span key={index} className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week}>
        {week[2].map((element, index) => (
          <span key={index} className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week}>
        {week[3].map((element, index) => (
          <span key={index} className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week}>
        {week[4].map((element, index) => (
          <span key={index} className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week}>
        {week[5].map((element, index) => (
          <span key={index} className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CalendarBody;

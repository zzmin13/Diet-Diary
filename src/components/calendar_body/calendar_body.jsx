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
    <>
      <div className={styles.week_1}>
        {week[0].map((element) => (
          <span className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week_2}>
        {week[1].map((element) => (
          <span className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week_3}>
        {week[2].map((element) => (
          <span className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week_4}>
        {week[3].map((element) => (
          <span className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week_5}>
        {week[4].map((element) => (
          <span className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
      <div className={styles.week_6}>
        {week[5].map((element) => (
          <span className={styles.date}>
            {element.substring(6, 8)[0] === "0"
              ? element.substring(7, 8)
              : element.substring(6, 8)}
          </span>
        ))}
      </div>
    </>
  );
};

export default CalendarBody;

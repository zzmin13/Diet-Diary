import React from "react";
import styles from "./calendar_body.module.css";

const CalendarBody = ({ calendarDate, dateObject, user }) => {
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
  console.log(calendarDate.format("MM월"));
  return (
    <div className={styles.container}>
      {week.map((element) => (
        <div className={styles.week}>
          {element.map((element, index) =>
            element.substring(4, 6) === calendarDate.format("MM") ? (
              <span
                key={index}
                className={`${styles.date_bold} ${styles.date}`}
              >
                {element.substring(6, 8)[0] === "0"
                  ? element.substring(7, 8)
                  : element.substring(6, 8)}
              </span>
            ) : (
              <span
                key={index}
                className={`${styles.date_gray} ${styles.date}`}
              >
                {element.substring(6, 8)[0] === "0"
                  ? element.substring(7, 8)
                  : element.substring(6, 8)}
              </span>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;

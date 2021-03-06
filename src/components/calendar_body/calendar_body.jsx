import React from "react";
import styles from "./calendar_body.module.css";

const CalendarBody = ({ calendarDate, user, changeDate, date }) => {
  const week = Array.from(new Array(6), () => []);
  const diaryDateArray = Object.keys(user.userDiary);
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
  const onClickDate = (event) => {
    changeDate(event.currentTarget.id);
  };
  return (
    <div className={styles.container}>
      {week.map((element, index) => (
        <div key={index} className={styles.week}>
          {element.map((element) =>
            element.substring(4, 6) === calendarDate.format("MM") ? (
              element === date ? (
                <div
                  key={element}
                  className={`${styles.date_box} ${styles.selected}`}
                >
                  <span
                    onClick={onClickDate}
                    id={element}
                    className={`${styles.date_bold} ${styles.date} `}
                  >
                    {element.substring(6, 8)[0] === "0"
                      ? element.substring(7, 8)
                      : element.substring(6, 8)}
                  </span>
                  {diaryDateArray.includes(element) ? (
                    <div key={element} className={styles.diary_exist}></div>
                  ) : (
                    <div key={element} className={styles.diary_none}></div>
                  )}
                </div>
              ) : (
                <div key={element} className={styles.date_box}>
                  <span
                    onClick={onClickDate}
                    id={element}
                    className={`${styles.date_bold} ${styles.date}`}
                  >
                    {element.substring(6, 8)[0] === "0"
                      ? element.substring(7, 8)
                      : element.substring(6, 8)}
                  </span>
                  {diaryDateArray.includes(element) ? (
                    <div key={element} className={styles.diary_exist}></div>
                  ) : (
                    <div key={element} className={styles.diary_none}></div>
                  )}
                </div>
              )
            ) : (
              <div key={element} className={styles.date_box}>
                <span className={`${styles.date_gray} ${styles.date}`}>
                  {element.substring(6, 8)[0] === "0"
                    ? element.substring(7, 8)
                    : element.substring(6, 8)}
                </span>
                <div className={styles.diary_none}></div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;

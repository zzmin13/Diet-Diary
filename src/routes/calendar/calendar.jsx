import React from "react";
import styles from "./calendar.module.css";
import CalendarItem from "../../components/calendar_item/calendar_item";
import { useState } from "react";
import moment from "moment";
import CalendarDiary from "../../components/calendar_diary/calendar_diary";
const Calendar = ({ authSerivce, database, dateObject, user }) => {
  const [calendarDate, setCalendarDate] = useState(moment());
  const [diaryDate, setDiaryDate] = useState(moment().format("YYYYMMDD"));
  const increaseMonth = () => {
    const clone = calendarDate.clone();
    setCalendarDate(clone.add(1, "M"));
  };
  const decreaseMonth = () => {
    const clone = calendarDate.clone();
    setCalendarDate(clone.subtract(1, "M"));
  };
  const changeDiaryDate = (string) => {
    setDiaryDate(string);
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.calendar}>
          <CalendarItem
            calendarDate={calendarDate}
            increaseMonth={increaseMonth}
            decreaseMonth={decreaseMonth}
            dateObject={dateObject}
            user={user}
            changeDiaryDate={changeDiaryDate}
            diaryDate={diaryDate}
          />
        </div>
        <div className={styles.diary}>
          <CalendarDiary
            authSerivce={authSerivce}
            database={database}
            dateObject={dateObject}
            user={user}
            diaryDate={diaryDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;

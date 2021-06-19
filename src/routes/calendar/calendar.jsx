import React from "react";
import styles from "./calendar.module.css";
import CalendarItem from "../../components/calendar_item/calendar_item";
import { useState } from "react";
import moment from "moment";
const Calendar = ({ dateObject }) => {
  const [calendarDate, setCalendarDate] = useState(moment());
  const increaseMonth = () => {
    const clone = calendarDate.clone();
    setCalendarDate(clone.add(1, "M"));
  };
  const decreaseMonth = () => {
    const clone = calendarDate.clone();
    setCalendarDate(clone.subtract(1, "M"));
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.calendar}>
          <CalendarItem
            calendarDate={calendarDate}
            increaseMonth={increaseMonth}
            decreaseMonth={decreaseMonth}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
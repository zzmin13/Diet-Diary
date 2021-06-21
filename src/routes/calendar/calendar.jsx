import React from "react";
import CalendarItem from "../../components/calendar_item/calendar_item";
import { useState } from "react";
import moment from "moment";
const Calendar = ({ dateObject, user, changeDate, date }) => {
  const [calendarDate, setCalendarDate] = useState(moment(date));
  const increaseMonth = () => {
    const clone = calendarDate.clone();
    setCalendarDate(clone.add(1, "M"));
  };
  const decreaseMonth = () => {
    const clone = calendarDate.clone();
    setCalendarDate(clone.subtract(1, "M"));
  };
  return (
    <CalendarItem
      calendarDate={calendarDate}
      increaseMonth={increaseMonth}
      decreaseMonth={decreaseMonth}
      dateObject={dateObject}
      user={user}
      changeDate={changeDate}
      date={date}
    />
  );
};

export default Calendar;

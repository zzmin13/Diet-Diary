import React from "react";
import CalendarHead from "../calendar_head/calendar_head";
import CalendarBody from "../calendar_body/calendar_body";
const CalendarItem = ({
  calendarDate,
  increaseMonth,
  decreaseMonth,
  dateObject,
  user,
}) => {
  return (
    <div>
      <CalendarHead
        calendarDate={calendarDate}
        increaseMonth={increaseMonth}
        decreaseMonth={decreaseMonth}
      />
      <CalendarBody
        calendarDate={calendarDate}
        dateObject={dateObject}
        user={user}
      />
    </div>
  );
};

export default CalendarItem;

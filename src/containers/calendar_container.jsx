import React from "react";
import { connect } from "react-redux";
import Calendar from "../routes/calendar/calendar";

const CalendarContainer = (props) => {
  return <Calendar {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  dateObject: state.userReducer.dateObject,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);

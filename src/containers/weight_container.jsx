import React from "react";
import { connect } from "react-redux";
import Weight from "../routes/weight/weight";
import { editTodayWeight } from "../modules/user";

const WeightContainer = (props) => {
  return (
    <>
      <Weight {...props} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  dateObject: state.userReducer.dateObject,
});
const mapDispatchToProps = (dispatch) => ({
  editTodayWeight: (date, weight) => {
    dispatch(editTodayWeight(date, weight));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(WeightContainer);

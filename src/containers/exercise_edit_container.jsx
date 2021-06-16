import React from "react";
import { connect } from "react-redux";
import ExerciseEdit from "../routes/exercise_edit/exercise_edit";

const ExerciseEditContainer = (props) => {
  return <ExerciseEdit {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  user: state.userReducer.user,
  uid: state.userReducer.uid,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseEditContainer);

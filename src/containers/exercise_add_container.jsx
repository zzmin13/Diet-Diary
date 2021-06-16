import React from "react";
import { connect } from "react-redux";
import ExerciseAdd from "../routes/exercise_add/exercise_add";

const ExerciseAddContainer = (props) => {
  return <ExerciseAdd {...props} />;
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseAddContainer);

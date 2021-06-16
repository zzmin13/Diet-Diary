import React from "react";
import { connect } from "react-redux";
import Exercise from "../routes/exercise/exercise";
import {
  loginUser,
  logoutUser,
  loadUserInformation,
  deleteExercise,
} from "../modules/user";

const ExerciseContainer = (props) => {
  return <Exercise {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({
  loginUser: (currentUser) => {
    dispatch(loginUser(currentUser));
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
  loadUserInformation: (response) => {
    dispatch(loadUserInformation(response));
  },
  deleteExercise: (current, exerciseId, exerciseKcal, totalCalories) => {
    dispatch(deleteExercise(current, exerciseId, exerciseKcal, totalCalories));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseContainer);

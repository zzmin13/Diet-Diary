import React from "react";
import { connect } from "react-redux";
import ExerciseDirectly from "../routes/exercise_directly/exercise_directly";
import { addExercise } from "../modules/user";

const ExerciseDirectlyContainer = (props) => {
  return <ExerciseDirectly {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  dateObject: state.userReducer.dateObject,
});
const mapDispatchToProps = (dispatch) => ({
  addExercise: (current, exerciseId, exerciseObj, totalCalories) => {
    dispatch(addExercise(current, exerciseId, exerciseObj, totalCalories));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseDirectlyContainer);

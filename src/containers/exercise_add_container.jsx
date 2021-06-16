import React from "react";
import { connect } from "react-redux";
import ExerciseAdd from "../routes/exercise_add/exercise_add";
import { addExercise } from "../modules/user";

const ExerciseAddContainer = (props) => {
  return <ExerciseAdd {...props} />;
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({
  addExercise: (current, exerciseId, exerciseObj, totalCalories) => {
    dispatch(addExercise(current, exerciseId, exerciseObj, totalCalories));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseAddContainer);

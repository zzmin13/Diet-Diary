import React from "react";
import { connect } from "react-redux";
import ExerciseSearch from "../routes/exercise_search/exercise_search";
import { addExercise } from "../modules/user";
const ExerciseSearchContainer = (props) => {
  return (
    <>
      <ExerciseSearch {...props} />
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
  addExercise: (current, exerciseId, exerciseObj, totalCalories) => {
    dispatch(addExercise(current, exerciseId, exerciseObj, totalCalories));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseSearchContainer);

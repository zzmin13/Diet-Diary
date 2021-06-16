import React from "react";
import { connect } from "react-redux";
import ExerciseEdit from "../routes/exercise_edit/exercise_edit";
import { editExercise } from "../modules/user";
const ExerciseEditContainer = (props) => {
  return <ExerciseEdit {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  user: state.userReducer.user,
  uid: state.userReducer.uid,
});
const mapDispatchToProps = (dispatch) => ({
  editExercise: (
    current,
    exerciseId,
    exerciseObj,
    beforeExerciseKcal,
    afterExerciseKcal,
    todayTotalCalories
  ) => {
    dispatch(
      editExercise(
        current,
        exerciseId,
        exerciseObj,
        beforeExerciseKcal,
        afterExerciseKcal,
        todayTotalCalories
      )
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseEditContainer);

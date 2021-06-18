import React from "react";
import { connect } from "react-redux";
import DietEdit from "../routes/diet_edit/diet_edit";
import { editDiet } from "../modules/user";
const DietEditContainer = (props) => {
  return <DietEdit {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  dateObject: state.userReducer.dateObject,
});
const mapDispatchToProps = (dispatch) => ({
  editDiet: (
    current,
    prevTime,
    currTime,
    beforeDiet,
    afterDiet,
    prevTimeTotalCalories,
    currTimeTotalCalories,
    todayTotalCalories
  ) => {
    dispatch(
      editDiet(
        current,
        prevTime,
        currTime,
        beforeDiet,
        afterDiet,
        prevTimeTotalCalories,
        currTimeTotalCalories,
        todayTotalCalories
      )
    );
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DietEditContainer);

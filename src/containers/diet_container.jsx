import React from "react";
import { connect } from "react-redux";
import Diet from "../routes/diet/diet";
import {
  loginUser,
  logoutUser,
  loadUserInformation,
  deleteDiet,
} from "../modules/user";

const DietContainer = (props) => {
  return <Diet {...props} />;
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
  deleteDiet: (
    current,
    time,
    id,
    calories,
    timeTotalCalories,
    todayTotalCalories
  ) => {
    dispatch(
      deleteDiet(
        current,
        time,
        id,
        calories,
        timeTotalCalories,
        todayTotalCalories
      )
    );
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DietContainer);

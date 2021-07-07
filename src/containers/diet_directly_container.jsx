import React from "react";
import { connect } from "react-redux";
import DietDirectly from "../routes/diet_directly/diet_directly";
import {
  loginUser,
  logoutUser,
  loadUserInformation,
  addDiet,
} from "../modules/user";
const DietDirectlyContainer = (props) => {
  return <DietDirectly {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  dateObject: state.userReducer.dateObject,
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
  addDiet: (current, time, content, totalCalories) => {
    dispatch(addDiet(current, time, content, totalCalories));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DietDirectlyContainer);

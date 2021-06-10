import React from "react";
import { connect } from "react-redux";
import Water from "../routes/water/water";
import { loginUser, logoutUser, loadUserInformation } from "../modules/user";

const WaterContainer = (props) => {
  return <Water {...props} />;
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
});
export default connect(mapStateToProps, mapDispatchToProps)(WaterContainer);

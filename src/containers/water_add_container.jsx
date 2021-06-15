import React from "react";
import { connect } from "react-redux";
import WaterAdd from "../routes/water_add/water_add";
import { loginUser, logoutUser, loadUserInformation } from "../modules/user";

const WaterAddContainer = (props) => {
  return <WaterAdd {...props} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(WaterAddContainer);
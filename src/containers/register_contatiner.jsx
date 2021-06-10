import React from "react";
import Register from "../routes/register/register";
import { loginUser, logoutUser, loadUserInformation } from "../modules/user";
import { connect } from "react-redux";

const RegisterContainer = (props) => {
  return <Register {...props} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

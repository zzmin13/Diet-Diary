import React from "react";
import { connect } from "react-redux";
import LoginHeader from "../components/loginHeader/loginHeader";
import { loginUser, logoutUser } from "../modules/user";

const LoginHeaderContainer = (props) => {
  return <LoginHeader {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  profile: state.userReducer.profile,
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({
  loginUser: (currentUser) => {
    dispatch(loginUser(currentUser));
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginHeaderContainer);

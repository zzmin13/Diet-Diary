import React from "react";
import { connect } from "react-redux";
import App from "../app";
import { loginUser, logoutUser } from "../modules/user";

const AppContainer = (props) => {
  return <App {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

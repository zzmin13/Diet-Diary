import React from "react";
import { connect } from "react-redux";
import App from "../app";
import { loginUser, logoutUser, loadUserInformation } from "../modules/user";

const AppContainer = (props) => {
  return <App {...props} />;
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

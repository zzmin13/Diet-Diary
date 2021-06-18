import React from "react";
import { connect } from "react-redux";
import Main from "../routes/main/main";
import { loginUser, logoutUser, loadUserInformation } from "../modules/user";
const MainContainer = (props) => {
  return <Main {...props} />;
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  user: state.userReducer.user,
  uid: state.userReducer.uid,
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
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

import React from "react";
import { connect } from "react-redux";
import Diary from "../routes/diary/diary";
import { loginUser, logoutUser, loadUserInformation } from "../modules/user";

const DiaryContainer = (props) => {
  return <Diary {...props} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(DiaryContainer);

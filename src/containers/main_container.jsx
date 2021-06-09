import React from "react";
import { connect } from "react-redux";
import Main from "../routes/main/main";
import { loginUser, logoutUser } from "../modules/user";
const MainContainer = (props) => {
  return <Main {...props} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

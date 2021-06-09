import React from "react";
import { connect } from "react-redux";
import Main from "../routes/main/main";
import { loginUser, logoutUser } from "../modules/user";
const MainContainer = (props) => {
  return <Main {...props} />;
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({
  loginUser: () => {
    dispatch(loginUser());
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

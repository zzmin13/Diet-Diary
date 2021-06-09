import React from "react";
import { connect } from "react-redux";
import Home from "../routes/home/home";
import { loginUser, logoutUser } from "../modules/user";

const HomeContainer = (props) => {
  return <Home {...props} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

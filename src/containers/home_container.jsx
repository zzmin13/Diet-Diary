import React from "react";
import { connect } from "react-redux";
import Home from "../routes/home/home";
import { loginUser, logoutUser } from "../modules/user";

const HomeContainer = (props) => {
  return <Home {...props} />;
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  loginUser: (currentUser) => {
    dispatch(loginUser(currentUser));
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

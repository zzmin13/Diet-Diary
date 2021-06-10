import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/navbar/navbar";
import { loginUser, logoutUser } from "../modules/user";
const NavbarContainer = (props) => {
  return <Navbar {...props} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);

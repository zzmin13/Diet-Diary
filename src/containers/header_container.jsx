import React from "react";
import { connect } from "react-redux";
import Header from "../components/header/header";
import { loginUser, logoutUser } from "../modules/user";

const HeaderContainer = ({
  authService,
  database,
  isUser,
  user,
  loginUser,
  logoutUser,
}) => {
  return (
    <Header
      authService={authService}
      database={database}
      isUser={isUser}
      user={user}
      loginUser={loginUser}
      logoutUser={logoutUser}
    />
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

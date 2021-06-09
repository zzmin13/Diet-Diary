import React from "react";
import { connect } from "react-redux";
import Header from "../components/header/header";
import { loginUser, logoutUser } from "../modules/user";

const HeaderContainer = ({
  authService,
  database,
  user,
  loginUser,
  logoutUser,
}) => {
  return (
    <Header
      authService={authService}
      database={database}
      user={user}
      loginUser={loginUser}
      logoutUser={logoutUser}
    />
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

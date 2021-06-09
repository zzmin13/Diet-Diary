import React from "react";
import { connect } from "react-redux";
import SocialLogin from "../components/social_login/social_login";
import { loginUser, logoutUser } from "../modules/user";

const SocialLoginContainer = ({
  user,
  loginUSer,
  logoutUser,
  authService,
  database,
  handleOnClick,
  closeModal,
  text1,
  text2,
  text3,
}) => {
  return (
    <SocialLogin
      user={user}
      loginUser={loginUser}
      logoutUser={logoutUser}
      authService={authService}
      database={database}
      handleOnClick={handleOnClick}
      closeModal={closeModal}
      text1={text1}
      text2={text2}
      text3={text3}
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: () => {
    dispatch(loginUser());
    console.log(`hi`);
  },
  logoutUser: () => {
    dispatch(logoutUser());
    console.log(`hello`);
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialLoginContainer);

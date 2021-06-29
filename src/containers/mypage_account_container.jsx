import React from "react";
import { connect } from "react-redux";
import MypageAccount from "../routes/mypage_account/mypage_account";
import { updateProfile } from "../modules/user";
const MypageAccountContainer = (props) => {
  return <MypageAccount {...props} />;
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  profile: state.userReducer.profile,
});
const mapDispatchToProps = (dispatch) => ({
  updateProfile: (avatarURL, nickname) => {
    dispatch(updateProfile(avatarURL, nickname));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MypageAccountContainer);

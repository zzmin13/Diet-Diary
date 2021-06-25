import React from "react";
import { connect } from "react-redux";
import MypageAccount from "../routes/mypage_account/mypage_account";

const MypageAccountContainer = (props) => {
  return <MypageAccount {...props} />;
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MypageAccountContainer);

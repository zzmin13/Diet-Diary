import React from "react";
import { connect } from "react-redux";
import MypageHealth from "../routes/mypage_health/mypage_health";

const MypageHealthContainer = (props) => {
  return <MypageHealth {...props} />;
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
)(MypageHealthContainer);

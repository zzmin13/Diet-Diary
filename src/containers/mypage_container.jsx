import React from "react";
import { connect } from "react-redux";
import Mypage from "../routes/mypage/mypage";

const MypageContainer = (props) => {
  return <Mypage {...props} />;
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MypageContainer);

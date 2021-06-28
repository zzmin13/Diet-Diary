import React from "react";
import { connect } from "react-redux";
import MypageHealth from "../routes/mypage_health/mypage_health";
import { updateHealthInformation } from "../modules/user";

const MypageHealthContainer = (props) => {
  return <MypageHealth {...props} />;
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({
  updateHealthInformation: (content) => {
    dispatch(updateHealthInformation(content));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MypageHealthContainer);

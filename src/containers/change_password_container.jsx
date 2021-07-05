import React from "react";
import { connect } from "react-redux";
import ChangePassword from "../routes/change_password/change_password";

const ChangePasswordContainer = (props) => {
  return <ChangePassword {...props} />;
};

const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  profile: state.userReducer.profile,
  dateObject: state.userReducer.dateObject,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordContainer);

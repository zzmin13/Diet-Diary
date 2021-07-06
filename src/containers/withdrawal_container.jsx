import React from "react";
import { connect } from "react-redux";
import WithDrawal from "../routes/withdrawal/withdrawal";
import { logoutUser } from "../modules/user";
const WithdrawalContainer = (props) => {
  return (
    <>
      <WithDrawal {...props} />
    </>
  );
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  profile: state.userReducer.profile,
});
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithdrawalContainer);

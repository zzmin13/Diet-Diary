import React from "react";
import { connect } from "react-redux";
import WithDrawal from "../routes/withdrawal/withdrawal";
const WithdrawalContainer = (props) => {
  return (
    <>
      <WithDrawal {...props} />
    </>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithdrawalContainer);

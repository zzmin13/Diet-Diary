import React from "react";
import { connect } from "react-redux";
import DietEdit from "../routes/diet_edit/diet_edit";

const DietEditContainer = (props) => {
  return <DietEdit {...props} />;
};
const mapStateToProps = (state) => ({
  isUser: state.userReducer.isUser,
  uid: state.userReducer.uid,
  user: state.userReducer.user,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(DietEditContainer);

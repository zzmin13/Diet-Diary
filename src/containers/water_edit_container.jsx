import React from "react";
import { connect } from "react-redux";
import WaterEdit from "../routes/water_edit/water_edit";
import { editWater } from "../modules/user";

const WaterEditContainer = (props) => {
  return <WaterEdit {...props} />;
};
const mapStateToProps = (state) => ({
  uid: state.userReducer.uid,
  user: state.userReducer.user,
  isUser: state.userReducer.isUser,
  dateObject: state.userReducer.dateObject,
});
const mapDispatchToProps = (dispatch) => ({
  editWater: (current, waterObj) => {
    dispatch(editWater(current, waterObj));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(WaterEditContainer);

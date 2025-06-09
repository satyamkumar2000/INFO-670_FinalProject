import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import DetailView from "./DetailView";
import UpdatePerson from "./UpdatePerson";
import * as actions from "../actions";

const PeopleDetail = ({ toUpdate }) => (
  <View>{toUpdate ? <UpdatePerson /> : <DetailView />}</View>
);

const mapStateToProps = (state) => ({
  toUpdate: state.toUpdate,
});

export default connect(mapStateToProps, actions)(PeopleDetail);

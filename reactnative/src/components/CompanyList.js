// Updated CompanyList.js to display company groups with flags
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import CompanyItem from "./CompanyItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f5f5f5",
  },
});

const CompanyList = ({ companies }) => (
  <View style={styles.container}>
    <FlatList
      data={companies}
      renderItem={({ item }) => <CompanyItem companies={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

const mapStateToProps = (state) => {
  const people = state.people;
  const companies = _.chain(people)
    .groupBy("company")
    .map((value, key) => ({
      company: key,
      names: value,
    }))
    .value();
  return { companies };
};

export default connect(mapStateToProps)(CompanyList);

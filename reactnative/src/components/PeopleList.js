import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import PeopleItem from "./PeopleItem";
import PeopleDetail from "./PeopleDetail";
import { loadInitialContacts } from "../actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f5f5f5",
  },
});

const PeopleList = ({ people, detailView, loadInitialContacts }) => {
  useEffect(() => {
    loadInitialContacts();
  }, []);

  return (
    <View style={styles.container}>
      {detailView ? (
        <PeopleDetail />
      ) : (
        <FlatList
          data={people}
          renderItem={({ item }) => <PeopleItem people={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  people: state.people,
  detailView: state.detailView,
});

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);

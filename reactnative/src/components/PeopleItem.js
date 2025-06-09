import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons";
import * as actions from "../actions";

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    height: 100,
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 20,
    color: "#4db6ac",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 50,
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginLeft: 20,
    color: "#333",
  },
  action: {
    marginLeft: 20,
    marginTop: 8,
    backgroundColor: "#4db6ac",
    color: "white",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
});

const PeopleItem = ({ people, selectPerson }) => (
  <TouchableOpacity onPress={() => selectPerson(people._id)}>
    <View style={styles.card}>
      <Image
        source={require("../images/background.jpg")}
        style={styles.image}
      />
      <Icon
        name={"user"}
        size={60}
        style={styles.icon}
      />
      <Text style={styles.title}>
        {people.firstName} {people.lastName}
      </Text>
      <Text style={styles.action}>{people.company}</Text>
    </View>
  </TouchableOpacity>
);

export default connect(null, actions)(PeopleItem);

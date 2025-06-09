// Updated AddPerson.js with country field and UI
import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import { connect } from "react-redux";
import * as actions from "../actions";

const styles = StyleSheet.create({
  form: {
    flex: 1,
    margin: 20,
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  fieldStyles: {
    marginBottom: 16,
    color: "#222",
  },
  addButton: {
    marginTop: 24,
    borderRadius: 8,
    overflow: "hidden",
  },
});

const AddPerson = ({
  firstName,
  lastName,
  phone,
  email,
  company,
  project,
  notes,
  country,
  formUpdate,
  createNewContact,
  navigation,
}) => {
  const onAddPress = () => {
    createNewContact({
      firstName,
      lastName,
      phone,
      email,
      company,
      project,
      notes,
      country,
    });
    navigation.navigate("People");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.form}>
        <Text style={styles.heading}>Add a New Contact</Text>
        <TextInput
          label="First name"
          style={styles.fieldStyles}
          value={firstName}
          onChangeText={(value) => formUpdate({ prop: "firstName", value })}
        />
        <TextInput
          label="Last name"
          style={styles.fieldStyles}
          value={lastName}
          onChangeText={(value) => formUpdate({ prop: "lastName", value })}
        />
        <TextInput
          label="Phone number"
          style={styles.fieldStyles}
          value={phone}
          onChangeText={(value) => formUpdate({ prop: "phone", value })}
        />
        <TextInput
          label="Email"
          style={styles.fieldStyles}
          value={email}
          onChangeText={(value) => formUpdate({ prop: "email", value })}
        />
        <TextInput
          label="Company"
          style={styles.fieldStyles}
          value={company}
          onChangeText={(value) => formUpdate({ prop: "company", value })}
        />
        <TextInput
          label="Project"
          style={styles.fieldStyles}
          value={project}
          onChangeText={(value) => formUpdate({ prop: "project", value })}
        />
        <TextInput
          label="Notes"
          style={styles.fieldStyles}
          value={notes}
          onChangeText={(value) => formUpdate({ prop: "notes", value })}
        />
        <TextInput
          label="Country"
          style={styles.fieldStyles}
          value={country}
          onChangeText={(value) => formUpdate({ prop: "country", value })}
        />
        <View style={styles.addButton}>
          <Button
            title="Add"
            color="#4db6ac"
            onPress={onAddPress}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    company,
    project,
    notes,
    country,
  } = state;
  return {
    firstName,
    lastName,
    phone,
    email,
    company,
    project,
    notes,
    country,
  };
};

export default connect(mapStateToProps, actions)(AddPerson);

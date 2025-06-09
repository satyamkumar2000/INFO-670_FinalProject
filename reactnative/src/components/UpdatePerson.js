import React from "react";
import { View, StyleSheet, ScrollView, Text, Alert } from "react-native";
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

// Email format validation
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Phone format validation
const validatePhone = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
};

const UpdatePerson = ({
  firstName,
  lastName,
  phone,
  email,
  company,
  project,
  notes,
  country,
  _id,
  formUpdate,
  saveContact,
}) => {
  const onUpdatePress = () => {
    const fields = {
      firstName: firstName?.trim() || "",
      lastName: lastName?.trim() || "",
      phone: phone?.trim() || "",
      email: email?.trim() || "",
      company: company?.trim() || "",
      project: project?.trim() || "",
      notes: notes?.trim() || "",
      country: country?.trim() || "",
    };

    for (let key in fields) {
      if (key !== "notes" && fields[key] === "") {
        Alert.alert("Missing Field", `Please enter ${key}`);
        return;
      }
    }

    if (!validateEmail(fields.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!validatePhone(fields.phone)) {
      Alert.alert("Invalid Phone", "Phone number must be 10 digits.");
      return;
    }

    saveContact({ ...fields, _id });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.form}>
        <Text style={styles.heading}>Update Contact</Text>

        <TextInput
          label="First name *"
          style={styles.fieldStyles}
          value={firstName}
          onChangeText={(value) => formUpdate({ prop: "firstName", value })}
        />
        <TextInput
          label="Last name *"
          style={styles.fieldStyles}
          value={lastName}
          onChangeText={(value) => formUpdate({ prop: "lastName", value })}
        />
        <TextInput
          label="Phone number *"
          style={styles.fieldStyles}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={(value) => formUpdate({ prop: "phone", value })}
        />
        <TextInput
          label="Email *"
          style={styles.fieldStyles}
          keyboardType="email-address"
          value={email}
          onChangeText={(value) => formUpdate({ prop: "email", value })}
        />
        <TextInput
          label="Company *"
          style={styles.fieldStyles}
          value={company}
          onChangeText={(value) => formUpdate({ prop: "company", value })}
        />
        <TextInput
          label="Project *"
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
          label="Country *"
          style={styles.fieldStyles}
          value={country}
          onChangeText={(value) => formUpdate({ prop: "country", value })}
        />
        <View style={styles.addButton}>
          <Button
            title="Update"
            color="#4db6ac"
            onPress={onUpdatePress}
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
    _id,
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
    _id,
  };
};

export default connect(mapStateToProps, actions)(UpdatePerson);

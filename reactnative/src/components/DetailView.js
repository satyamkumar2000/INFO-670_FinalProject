import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import * as actions from "../actions";

const styles = StyleSheet.create({
  title1: {
    top: -75,
    left: 100,
    fontSize: 24,
  },
  title2: {
    top: -70,
    left: 100,
    fontSize: 24,
  },
  image: {
    height: 100,
    backgroundColor: "transparent",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 5,
    color: "red",
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 0,
    color: "white",
    backgroundColor: "rgba(255,255,255,0)",
  },
  textArea: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 5,
    alignItems: "center",
  },
  finalText: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  textIcons: {
    color: "#26a69a",
  },
  actionArea: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  editIcon: {
    color: "#26a6e4",
  },
  sections: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 10,
    width: 100,
  },
  deleteIcon: {
    color: "#e9a69a",
  },
  editDeleteArea: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(211,211,211, 0.3)",
    marginBottom: 10,
    marginTop: 20,
  },
  actionImage: {
    width: 100,
    height: 100,
  },
});

// Phone call handler
const handlePhonePress = (phone) => {
  if (phone) {
    Linking.openURL(`tel:${phone}`).catch(() =>
      Alert.alert("Error", "Could not make phone call")
    );
  }
};

// Email handler
const handleEmailPress = (email) => {
  if (email) {
    Linking.openURL(`mailto:${email}`).catch(() =>
      Alert.alert("Error", "Could not open email client")
    );
  }
};

// SMS handler
const handleSmsPress = (phone) => {
  if (phone) {
    Linking.openURL(`sms:${phone}`).catch(() =>
      Alert.alert("Error", "Could not open messages")
    );
  }
};

const DetailView = ({
  person,
  toUpdate,
  updateContact,
  deleteContact,
  noneSelected,
}) => {
  const updateTest = () => {
    updateContact(person);
  };

  if (!person || !person.firstName) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 40 }}>
          No contact selected
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../images/background.jpg")}
          style={styles.image}
        />
        <EvilIcon
          name={"user"}
          size={100}
          style={styles.icon}
        />
        <SimpleIcon
          name={"close"}
          size={30}
          style={styles.closeIcon}
          onPress={() => noneSelected()}
        />
        <Text style={styles.title1}>
          {person.firstName} {person.lastName}
        </Text>
        <Text style={styles.title2}>{person.company}</Text>

        {/* Phone Section */}
        <TouchableOpacity onPress={() => handlePhonePress(person.phone)}>
          <View style={styles.textArea}>
            <MaterialIcon
              name={"phone"}
              size={40}
              style={styles.textIcons}
            />
            <Text style={styles.finalText}>{person.phone}</Text>
          </View>
        </TouchableOpacity>

        {/* Email Section */}
        <TouchableOpacity onPress={() => handleEmailPress(person.email)}>
          <View style={styles.textArea}>
            <MaterialIcon
              name={"email"}
              size={40}
              style={styles.textIcons}
            />
            <Text style={styles.finalText}>{person.email}</Text>
          </View>
        </TouchableOpacity>

        {/* Project Section */}
        <View style={styles.textArea}>
          <MaterialIcon
            name={"assignment"}
            size={40}
            style={styles.textIcons}
          />
          <Text style={styles.finalText}>{person.project}</Text>
        </View>

        {/* Notes Section */}
        <View style={styles.textArea}>
          <MaterialIcon
            name={"mode-edit"}
            size={40}
            style={styles.textIcons}
          />
          <Text style={styles.finalText}>{person.notes}</Text>
        </View>

        {/* Edit/Delete Section */}
        <View style={styles.editDeleteArea}>
          <TouchableOpacity
            style={styles.sections}
            onPress={updateTest}
          >
            <MaterialIcon
              name={"autorenew"}
              size={40}
              style={styles.editIcon}
            />
            <Text style={styles.finalText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sections}
            onPress={() => deleteContact(person._id)}
          >
            <MaterialIcon
              name={"delete-forever"}
              size={40}
              style={styles.editIcon}
            />
            <Text style={styles.finalText}>DELETE</Text>
          </TouchableOpacity>
        </View>

        {/* Action Images */}
        <View style={styles.actionArea}>
          <TouchableOpacity onPress={() => handlePhonePress(person.phone)}>
            <Image
              source={require("../images/call.png")}
              style={styles.actionImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEmailPress(person.email)}>
            <Image
              source={require("../images/email.png")}
              style={styles.actionImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSmsPress(person.phone)}>
            <Image
              source={require("../images/sms.png")}
              style={styles.actionImage}
            />
          </TouchableOpacity>
        </View>

        {/* Action Labels */}
        <View style={styles.actionArea}>
          <Text>Call</Text>
          <Text>Email</Text>
          <Text>SMS</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  const person = state.people.find((p) => p._id === state.personSelected) || {};
  return {
    person,
    toUpdate: state.toUpdate,
  };
};

export default connect(mapStateToProps, actions)(DetailView);

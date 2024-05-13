import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

import { useTodoStore } from "../stores/useTodoStore.js";

const AddTopicWaterLevel = ({ navigation }) => {
  const [newWater, setNewWater] = useState("");
  const [newWtopic, setNewWtopic] = useState("");

  const addWater = useTodoStore((state) => state.addWater);
  const addWtopic = useTodoStore((state) => state.addWtopic);

  const handleClickWaterLevel = () => {
    addWater(newWater);
    addWtopic(newWtopic);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.semiHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("addInstrument")}
          >
            <Ionicons name="chevron-back" size={24} color="#ff4000" />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Initialize Water Level</Text>
          <TouchableOpacity onPress={handleClickWaterLevel}>
            <Ionicons name="checkmark" size={28} color="#ff4000" />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTopicWrapper}
        >
          {/* add to do container */}
          <View>
            <TextInput
              style={styles.input}
              placeholder={"Name"}
              value={newWater}
              onChangeText={(text) => setNewWater(text)}
            />
            {/* <Button title="Add To Do" onPress={handleClickWaterLevel}></Button> */}
          </View>
          <TextInput
            style={styles.input}
            placeholder={"Topic"}
            value={newWtopic}
            onChangeText={(text) => setNewWtopic(text)}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default AddTopicWaterLevel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  contentWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
    // backgroundColor: "yellow",
  },
  semiHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#ff0000",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    paddingVertical: 10,
    // paddingHorizontal: 15,
    backgroundColor: "transparent",
    borderColor: "#000",
    borderBottomWidth: 1,
    width: "100%",
  },
});

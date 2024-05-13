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

const EditWtopic = ({ navigation, route }) => {
  const { data, setData, key } = useTodoStore();

  const waters = useTodoStore((state) => state.waters);
  const wtopics = useTodoStore((state) => state.wtopics);

  const specificWater = useTodoStore((state) => state.waters[key]);
  const specificWtopic = useTodoStore((state) => state.wtopics[key]);

  const handleUpdateData = () => {
    console.log(key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.semiHeader}>
          <TouchableOpacity onPress={() => navigation.navigate("WaterLevel")}>
            <Ionicons name="chevron-back" size={24} color="#ff4000" />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Edit {specificWater}</Text>
          <TouchableOpacity>
            <Ionicons name="checkmark" size={28} color="#ff4000" />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTopicWrapper}
        >
          {/* add to do container */}
          <View style={styles.addTodoContainer}>
            <TextInput
              style={styles.input}
              placeholder={"Name"}
              // value={newTodo}
              // onChangeText={(text) => setNewTodo(text)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder={"Topic"}
            // value={newTopic}
            // onChangeText={(text) => setNewTopic(text)}
          />
        </KeyboardAvoidingView>
        <Button title="Add To Do" onPress={handleUpdateData}></Button>
      </View>
    </View>
  );
};

export default EditWtopic;

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

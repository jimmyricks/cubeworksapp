import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTodoStore } from "../stores/useTodoStore.js";

const AddTopic = ({ navigation }) => {
  const { data, setData, key, setKey, setObjkey } = useTodoStore();
  const todos = useTodoStore((state) => state.todos);
  const waters = useTodoStore((state) => state.waters);
  const topics = useTodoStore((state) => state.topics);
  const wtopics = useTodoStore((state) => state.wtopics);

  const [newTodo, setNewTodo] = useState("");
  const [newTopic, setNewTopic] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);
  const addTopic = useTodoStore((state) => state.addTopic);

  const handleClickPump = () => {
    // Check if newTopic already exists in topics
    if (topics.includes(newTopic)) {
      // Handle case where newTopic already exists
      console.log("Topic already exists!");
      return; // Prevent adding duplicate topic
    }

    // If newTodo and newTopic are unique, add them
    addTodo(newTodo);
    addTopic(newTopic);

    // If newTopic is nowhere to be found in topics, show an alert
    // if (!topics.includes(newTopic)) {
    //   Alert.alert(
    //     "Topic Not Found",
    //     "The entered topic does not exist in the list of topics."
    //   );
    //   console.log("Topic does not exist!");

    //   return;
    // }

    // Navigate back to the home screen only if the topic exists
    navigation.navigate("Home");
  };

  const isDisabled =
    !newTodo.trim() || !newTopic.trim() || topics.includes(newTopic);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.semiHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("addInstrument")}
          >
            <Ionicons name="chevron-back" size={24} color="#ff4000" />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Initialize Pump</Text>
          <TouchableOpacity onPress={handleClickPump} disabled={isDisabled}>
            <Ionicons
              name="checkmark"
              size={28}
              color={isDisabled ? "grey" : "#ff4000"}
            />
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
              value={newTodo}
              onChangeText={(text) => setNewTodo(text)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder={"Topic"}
            value={newTopic}
            onChangeText={(text) => setNewTopic(text)}
          />
          {topics.includes(newTopic) && (
            <Text style={styles.errorText}>
              Topic already exists. Try a new one.
            </Text>
          )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default AddTopic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  contentWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  semiHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    paddingVertical: 10,
    backgroundColor: "transparent",
    borderColor: "#000",
    borderBottomWidth: 1,
    width: "100%",
  },
  errorText: {
    fontSize: 12,
    marginTop: 8,
    // fontStyle: "italic",
    color: "red",
  },
});

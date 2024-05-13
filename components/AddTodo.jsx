import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { useTodoStore } from "../stores/useTodoStore.js";

import Instrument from "./items/Instrument";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("Pump");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo("");
    // navigation.navigate("Home");
  };

  return (
    <View>
      <View style={styles.addTodoContainer}>
        <Text>AddTodo</Text>
        <TextInput
          style={styles.inputText}
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        {/* <Button title="Add To Do" onPress={handleClick}></Button> */}
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  addTodoContainer: {
    backgroundColor: "blue",
  },
  inputText: {
    padding: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
  },
});

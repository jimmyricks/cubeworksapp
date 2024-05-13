import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { useTodoStore } from "../stores/useTodoStore.js";

import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const TodoList = ({ navigation }) => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>TodoList using Zustand</Text>
      {/* <AddTodo /> */}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#444",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

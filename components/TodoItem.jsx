import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { useTodoStore } from "../stores/useTodoStore.js";

const TodoItem = ({ todo, topic }) => {
  const { data, setData } = useTodoStore();

  // Get the pump status from Zustand data
  const pumpstatus = parseInt(data[`${topic}_stat`] || 0);

  // Set the initial state of the toggle switch based on pump status
  const [isOn, setIsOn] = useState(pumpstatus === 1);

  // Handle toggle switch change
  const handleToggle = () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
    // Update data in Zustand store
    setData((prevData) => ({
      ...prevData,
      [`${topic}_stat`]: newIsOn ? 1 : 0,
    }));
  };

  // Update toggle switch state when Zustand data changes
  useEffect(() => {
    setIsOn(pumpstatus === 1);
  }, [data]);

  return (
    <View style={styles.todoItems}>
      <Text style={styles.itemText}>{todo}</Text>
      <ToggleSwitch size="large" isOn={isOn} onToggle={handleToggle} />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItems: {
    padding: 20,
    backgroundColor: "#fff",
    height: 160,
    minWidth: 172,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    color: "#ff4000",
  },
});

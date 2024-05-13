import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import { useTodoStore } from "../../stores/useTodoStore.js";

const Status = (props) => {
  const { data, setData, key } = useTodoStore();

  const specificTopic = useTodoStore((state) => state.topics[key]);

  // Calculate pumpstatus
  const pumpstatus = parseInt(data[`${specificTopic}_stat`] || 0); // Default to 0 if data is undefined

  // Set the initial state of the toggle switch based on pumpstatus
  const [isOn, setIsOn] = useState(pumpstatus === 1);

  // Handle toggle switch change
  const handleToggle = () => {
    const newStatus = isOn ? 0 : 1;
    setIsOn(!isOn); // Toggle the switch immediately
    // Update data
    setData({ [`${specificTopic}_stat`]: newStatus });
  };

  // Update toggle switch state when Zustand store changes
  useEffect(() => {
    setIsOn(pumpstatus === 1);
  }, [pumpstatus]);

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.text}</Text>
      {/* Render ToggleSwitch */}
      <ToggleSwitch size="large" isOn={isOn} onToggle={handleToggle} />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    height: 150,
    width: "48%",
    flexDirection: "column",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 30,
  },
});

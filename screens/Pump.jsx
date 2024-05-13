import { TouchableOpacity, StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

import Status from "../components/items/Status";
import Gauge from "../components/items/Gauge";
import Power from "../components/items/Power";

import { useTodoStore } from "../stores/useTodoStore.js";

const Pump = ({ navigation, route }) => {
  const { data, setData, key } = useTodoStore();

  const specificTodo = useTodoStore((state) => state.todos[key]);
  const specificTopic = useTodoStore((state) => state.topics[key]);

  const removeTodo = useTodoStore((state) => state.removeTodo);
  const removeTopic = useTodoStore((state) => state.removeTopic);

  const handleClick = () => {
    console.log("pressed");
    removeTodo(specificTodo);
    removeTopic(specificTopic);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.semiHeader}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="chevron-back" size={24} color="#ff4000" />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>{specificTopic}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("editTopic", key)}
          >
            <Ionicons
              name="ellipsis-vertical-circle"
              size={28}
              color="#ff4000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.deetsWrapper}>
          <Status text={"Status"} />
          <Power text={"Power"} />
          <Gauge text={"Frequency"} />
          <Button
            title="Remove"
            onPress={() => {
              handleClick();
            }}
          ></Button>
        </View>
        {/* <Button title="Update Data" onPress={handleUpdateData}></Button> */}
        {/* <Button title="what topic" onPress={handleClick}></Button> */}
      </View>
    </View>
  );
};

export default Pump;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  contentWrapper: {
    paddingTop: 40,
    padding: 20,
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
  deetsWrapper: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingTop: 20,
  },
});

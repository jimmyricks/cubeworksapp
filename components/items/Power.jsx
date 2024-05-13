import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

import { useTodoStore } from "../../stores/useTodoStore.js";

const Power = (props) => {
  const { data, setData, key } = useTodoStore();

  const specificTodo = useTodoStore((state) => state.todos[key]);
  const specificTopic = useTodoStore((state) => state.topics[key]);

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.text}</Text>
      <Text style={styles.dataPower}>
        {JSON.stringify(data[`${specificTopic}_power`], null, 2)}
      </Text>
    </View>
  );
};

export default Power;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    marginBottom: 15,
    // marginRight: 10,
    height: 150,
    width: "48%",
    flexDirection: "column",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 15,
  },
  dataPower: {
    fontWeight: "bold",
    fontSize: 50,
    letterSpacing: -2,
  },
});

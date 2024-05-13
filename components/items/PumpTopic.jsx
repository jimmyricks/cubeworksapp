import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PumpTopic = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default PumpTopic;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ff2888",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    // marginRight: 10,
    height: 172,
    width: 172,
  },
  itemText: {},
});

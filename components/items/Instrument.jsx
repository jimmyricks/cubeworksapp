import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Instrument = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Instrument;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    marginBottom: 10,
    // marginRight: 10,
    height: 60,
    width: "100%",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    // maxWidth: "80%",
  },
});

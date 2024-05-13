import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { useTodoStore } from "../stores/useTodoStore.js";

import { LiquidGauge } from "react-native-liquid-gauge";

const WaterItem = ({ water, wtopic }) => {
  const { data, setData, key } = useTodoStore();

  const removeWater = useTodoStore((state) => state.removeWater);
  const removeWtopic = useTodoStore((state) => state.removeWtopic);

  const checkPing = () => {
    console.log(parseFloat(data[wtopic], null, 2));
  };

  const numericValue = parseFloat(data[wtopic], null, 2);

  return (
    <View style={styles.WaterItems}>
      <Text style={styles.waterName}>{water}</Text>
      {/* Positioning the water name */}
      <LiquidGauge
        config={{
          circleColor: "#FFF",
          textColor: "#4da3ff",
          waveTextColor: "#007bff",
          waveColor: "#e6f2ff",
          circleThickness: 0.05,
          textVertPosition: 0.3,
          waveAnimateTime: 1000,
          textSuffix: "ft",
          minValue: 0,
          maxValue: 300,
          textSize: 0.7,
          toFixed: 2,
        }}
        value={numericValue}
        width={130}
        height={130}
      />
      {/* <Button
        title="Remove"
        onPress={() => {
          removeWater(water), removeWtopic(wtopic);
        }}
      ></Button> */}
      {/* <Button title="checkping" onPress={checkPing}></Button> */}
    </View>
  );
};

export default WaterItem;

const styles = StyleSheet.create({
  WaterItems: {
    position: "relative", // Ensure relative positioning
    padding: 15,
    backgroundColor: "#99ccff",
    justifyContent: "center",
    alignItems: "center",
    height: 160,
    width: 172,
    marginBottom: 8,
    borderRadius: 10,
  },
  waterName: {
    position: "absolute", // Position absolute
    top: 15, // Adjust top position as needed
    left: 15, // Adjust left position as needed
    fontSize: 18,
    fontWeight: "bold",
    zIndex: 1,
    padding: 5,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.5)",
    color: "#ff4000",
  },
});

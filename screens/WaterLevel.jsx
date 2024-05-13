import { TouchableOpacity, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTodoStore } from "../stores/useTodoStore.js";
import { LiquidGauge } from "react-native-liquid-gauge";

const WaterLevel = ({ navigation }) => {
  const { data, key } = useTodoStore();
  const specificWater = useTodoStore((state) => state.waters[key]);
  const specificWtopic = useTodoStore((state) => state.wtopics[key]);

  const numericValue = parseFloat(data[specificWtopic], null, 2);

  const handleClick = () => {
    console.log(parseFloat(data[specificWtopic], null, 2));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.semiHeader}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="chevron-back" size={24} color="#ff4000" />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>{specificWater}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("editWtopic", key)}
          >
            <Ionicons
              name="ellipsis-vertical-circle"
              size={28}
              color="#ff4000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.deetsWrapper}>
          <LiquidGauge
            config={{
              circleColor: "#003c80",
              textColor: "#4da3ff",
              waveTextColor: "#b3d6ff",
              waveColor: "#0077ff",
              circleThickness: 0.05,
              textVertPosition: 0.2,
              waveAnimateTime: 1000,
              textSuffix: "ft",
              minValue: 0,
              maxValue: 18,
              textSize: 0.8,
              toFixed: 2,
            }}
            value={numericValue}
            width={300}
            height={300}
          />
        </View>
        {/* <Button title="checkping" onPress={handleClick}></Button> */}
      </View>
    </View>
  );
};

export default WaterLevel;

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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  deetsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
});

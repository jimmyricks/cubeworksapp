import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { SegmentedArc } from "@shipt/segmented-arc-for-react-native";

import { useTodoStore } from "../../stores/useTodoStore.js";

const Gauge = (props) => {
  const [showArcRanges, setShowArcRanges] = useState(false);

  const { data, setData, key } = useTodoStore();

  const specificTodo = useTodoStore((state) => state.todos[key]);
  const specificTopic = useTodoStore((state) => state.topics[key]);

  const segments = [
    {
      scale: 0.25,
      filledColor: "#00ff88",
      emptyColor: "#F2F3F5",
      data: { label: "Green" },
    },
    {
      scale: 0.25,
      filledColor: "#ffd000",
      emptyColor: "#F2F3F5",
      data: { label: "Yellow" },
    },
    {
      scale: 0.25,
      filledColor: "#ff8222",
      emptyColor: "#F2F3F5",
      data: { label: "Orange" },
    },
    {
      scale: 0.25,
      filledColor: "#ff5555",
      emptyColor: "#F2F3F5",
      data: { label: "Red" },
    },
  ];

  const ranges = ["0", "15", "30", "45", "60"];

  const _handlePress = () => {
    setShowArcRanges(!showArcRanges);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.text}</Text>
      <View style={styles.gaugeContainer}>
        <SegmentedArc
          segments={segments}
          fillValue={(parseInt(data[`${specificTopic}_freq`]) / 60) * 100}
          // isAnimated={true}
          // animationDelay={500}
          showArcRanges={showArcRanges}
          ranges={ranges}
          emptyArcWidth={10}
          filledArcWidth={12}
          spaceBetweenSegments={4}
        >
          {(metaData) => (
            <Pressable onPress={_handlePress} style={{ alignItems: "center" }}>
              {/* <Text style={{ fontSize: 16, paddingTop: 16 }}>
                {metaData.lastFilledSegment.data.label}
              </Text> */}
              <Text style={styles.dataFreq}>
                {JSON.stringify(data[`${specificTopic}_freq`], null, 2)}
              </Text>
            </Pressable>
          )}
        </SegmentedArc>
      </View>
    </View>
  );
};

export default Gauge;

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
    height: 200,
    width: "100%",
    // flex: 1,
    flexDirection: "column",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 6,
  },
  gaugeContainer: {
    backgroundColor: "#fff",
  },
  dataFreq: {
    marginTop: 16,
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: -2,
  },
});

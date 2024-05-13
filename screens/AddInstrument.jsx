import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import Instrument from "../components/items/Instrument";
import TodoItem from "../components/TodoItem";

import { useTodoStore } from "../stores/useTodoStore.js";

const AddInstrument = ({ navigation }) => {
  const objkey = useTodoStore((state) => state.objkey);

  const { data } = useTodoStore();

  const showPump = objkey.some((key) => key.includes("pump"));
  const showWaterLevel = objkey.includes("level");

  const handleClick = (instrument) => {
    if (instrument.includes("pump")) {
      navigation.navigate("addTopic");
    } else if (instrument.includes("level")) {
      navigation.navigate("addTopicWaterLevel");
    } else if (instrument.includes("pressure")) {
      navigation.navigate("Pressure");
    } else {
      // Handle default case
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.sectionTitle}>Select Instrument</Text>
          <View style={styles.items}>
            {objkey.map((objkey, index) => {
              const key = `${index}`;
              return (
                <TouchableOpacity key={key} onPress={() => handleClick(objkey)}>
                  <Instrument text={objkey} />
                </TouchableOpacity>
              );
            })}

            {/* {showPump && (
              <TouchableOpacity onPress={() => handleClick("Pump")}>
                <Instrument text={"Pump"} />
              </TouchableOpacity>
            )}
            {showWaterLevel && (
              <TouchableOpacity onPress={() => handleClick("Water Level")}>
                <Instrument text={"Water Level"} />
              </TouchableOpacity>
            )} */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddInstrument;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  contentWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputText: {
    padding: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  items: {
    marginTop: 10,
  },
});

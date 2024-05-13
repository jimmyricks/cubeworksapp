import React, { useState, useEffect } from "react";
import { useTodoStore } from "../stores/useTodoStore.js";
import {
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Paho from "paho-mqtt";
import TodoItem from "../components/TodoItem";
import WaterItem from "../components/WaterItem";

const Home = ({ navigation }) => {
  const { data, setData, key, setKey, setObjkey } = useTodoStore();
  const todos = useTodoStore((state) => state.todos);
  const waters = useTodoStore((state) => state.waters);
  const topics = useTodoStore((state) => state.topics);
  const wtopics = useTodoStore((state) => state.wtopics);

  useEffect(() => {
    client.connect({ onSuccess: onConnect });

    return () => {
      client.disconnect();
    };
  }, []);

  const client = new Paho.Client(
    "flows.cubeworksinnovation.com",
    8055,
    "/",
    "lajs"
  );
  client.debug = true;

  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  function onConnect() {
    console.log("onConnect");
    client.subscribe("pawd/data");
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
    const jsonData = JSON.parse(message.payloadString);
    handleUpdateData(jsonData);
    // console.log(jsonData);

    const extractedTopics = Object.keys(jsonData);
    handleObjKeys(extractedTopics);
  }

  function handleUpdateData(newData) {
    setData(newData);
  }

  function handleObjKeys(newObjkey) {
    setObjkey(newObjkey);
  }

  const handleClick = (selectedKey, isWater = false) => {
    setKey(selectedKey);
    navigation.navigate(isWater ? "WaterLevel" : "Pump", { key: selectedKey });
    console.log(todos, topics);
  };

  const testTopic = () => {
    console.log(todos, topics);
  };

  const [mqttClient, setMqttClient] = useState(null);

  // Function to handle received data from Status component
  const receiveDataFromStatus = ({ topic, status }) => {
    // Publish message to MQTT server
    if (mqttClient) {
      const message = new Paho.Message(status.toString());
      message.destinationName = topic;
      mqttClient.send(message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Wrap the View in a ScrollView */}
      <View style={styles.topicsWrapper}>
        {/* <View style={styles.semiHeader}>
          <Text style={styles.sectionTitle}>Cubeworks</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("addInstrument")}
          >
            <Ionicons name="add-circle-outline" size={28} color="#ff4000" />
          </TouchableOpacity>
        </View> */}
        <View style={styles.todoList}>
          {todos.map((todo, index) => (
            <TouchableOpacity
              key={`${index}`}
              onPress={() => handleClick(`${index}`)}
            >
              <TodoItem todo={todo} topic={topics[index]} />
            </TouchableOpacity>
          ))}
          {waters.map((water, index) => (
            <TouchableOpacity
              key={`${index}`}
              onPress={() => handleClick(`${index}`, true)}
            >
              <WaterItem water={water} wtopic={wtopics[index]} />
            </TouchableOpacity>
          ))}
        </View>
        <Button title="gotoTest" onPress={testTopic} />
      </View>
      <View style={styles.footer} />
      {/* Add an empty view to create space at the bottom */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    // paddingTop: 40,
  },
  topicsWrapper: {
    // paddingTop: 60,
    paddingHorizontal: 18,
  },
  // semiHeader: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  todoList: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  footer: {
    height: 40, // Adjust the height as needed
  },
});

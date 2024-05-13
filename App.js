import React, { useState } from "react";
import {
  Button,
  Modal,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "@expo/vector-icons/Ionicons";

import PumpTopic from "./components/items/PumpTopic.jsx";

import Home from "./screens/Home.jsx";
import AddTopic from "./screens/AddTopic.jsx";
import Pump from "./screens/Pump.jsx";
import WaterLevel from "./screens/WaterLevel.jsx";
import AddInstrument from "./screens/AddInstrument.jsx";
import AddTopicWaterLevel from "./screens/AddTopicWaterLevel.jsx";
import EditTopic from "./screens/EditTopic.jsx";
import EditWtopic from "./screens/EditWtopic.jsx";
import TestingScreen from "./screens/TestingScreen.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: "Cubeworks",
            headerRight: () => <AddInstrumentButton />,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#E8EAED",
            },
          })}
        />
        <Stack.Screen
          name="addTopic"
          component={AddTopic}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pump"
          component={Pump}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="addInstrument"
          component={AddInstrument}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#E8EAED",
            },
          }}
        />
        <Stack.Screen
          name="addTopicWaterLevel"
          component={AddTopicWaterLevel}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="editTopic"
          component={EditTopic}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WaterLevel"
          component={WaterLevel}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="editWtopic"
          component={EditWtopic}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="TestingScreen" component={TestingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AddInstrumentButton() {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("addInstrument");
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Ionicons name="add-circle-outline" size={28} color="#ff4000" />
    </TouchableOpacity>
  );
}

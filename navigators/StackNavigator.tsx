import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityScreen from "../BottomScreens/ActivityScreen";

import FirstScreen from "../components/firstScreen";
import SecondScreen from "../components/secondScreen";
import ThirdScreen from "../components/thirdScreen";
import FourthScreen from "../components/fourthScreen";
import EditButtonScreen from "../editButton/EditButtonScreen";
import FirstPage from "../pages/firstPage";
import AdvanceToolScreen from "../AdvancedTools/AdvanceToolScreen";
import SuccessScreen from "../pages/successScreen";
import TabNavigator from "./TabNavigator";
import ActivityFilterScreen from "../BottomScreens/ActivityFilterScreen/ActivityFilterScreen";
const Stack = createStackNavigator();

const StackNavigator = () => {
  const handleScreenChange = (index: number) => {
    // setActiveIndex(index);
  };
  return (
    <Stack.Navigator initialRouteName="FirstScreen">
      <Stack.Screen name="FirstScreen" options={{ headerShown: false }}>
        {(props) => (
          <FirstScreen {...props} onScreenChange={handleScreenChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="SecondScreen" options={{ headerShown: false }}>
        {(props) => (
          <SecondScreen {...props} onScreenChange={handleScreenChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="ThirdScreen" options={{ headerShown: false }}>
        {(props) => (
          <ThirdScreen {...props} onScreenChange={handleScreenChange} />
        )}
      </Stack.Screen>
      <Stack.Screen name="FourthScreen" options={{ headerShown: false }}>
        {(props) => (
          <FourthScreen {...props} onScreenChange={handleScreenChange} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="EditButtonScreen"
        component={EditButtonScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdvancedToolScreen"
        component={AdvanceToolScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityFilterScreen"
        component={ActivityFilterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  filterIcon: {
    marginRight: 15,
    width: 24,
    height: 24,
  },
});

export default StackNavigator;

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityScreen from "../BottomScreens/ActivityScreen";
import ActivityFilterScreen from "../BottomScreens/ActivityFilterScreen/ActivityFilterScreen";
const Stack = createStackNavigator();

const ActivityStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ActivityScreen">
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
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

export default ActivityStackNavigator;

import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../BottomScreens/HomeScreen";
import { Image } from "react-native";
//@ts-ignore
import ProfileTab from "../assets/images/ProfileTab.png";
//@ts-ignore
import Base from "../assets/images/Base.png";
//@ts-ignore
import Activity from "../assets/images/Activity.png";
//@ts-ignore
import AddImage from "../assets/images/AddImage.png";
//@ts-ignore
import HomeImage from "../assets/images/HomeImage.png";
import ActivityScreen from "../BottomScreens/ActivityScreen";
import AddUserScreen from "../BottomScreens/AddUserScreen";
import BasesScreen from "../BottomScreens/BasesScreen";
import ProfileScreen from "../BottomScreens/ProfileScreen";
import TabBarComponent from "../TabAnimation/CustomTabAnimation";

const Tab = createBottomTabNavigator();
type Props = {};

const TabNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#006271",
        tabBarStyle: {
          backgroundColor: "#006271",
          height: 70,
          padding: 10,
          position: "absolute",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={HomeImage}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={Activity}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddUserScreen"
        component={AddUserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={AddImage}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="BasesScreen"
        component={BasesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={Base}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="HouseHold"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={ProfileTab}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
  },
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 36,
    width: 36,
  },
});

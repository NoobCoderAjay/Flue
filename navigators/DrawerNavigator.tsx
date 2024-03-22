import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import DrawerContent from "../Drawer/Drawer";
import TabNavigator from "./TabNavigator";
const Drawer = createDrawerNavigator();
type Props = {};

const DrawerNavigator = (props: Props) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent />}>
      <Drawer.Screen name="Screens" options={{ headerShown: false }}>
        {() => (
          <>
            <StackNavigator />
          </>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});

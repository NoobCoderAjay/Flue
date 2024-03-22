import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LibreBaskerville_400Regular,
} from "@expo-google-fonts/libre-baskerville";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./Drawer/Drawer";
import FirstScreen from "./components/firstScreen";
import SecondScreen from "./components/secondScreen";
import ThirdScreen from "./components/thirdScreen";
import FourthScreen from "./components/fourthScreen";
import EditButtonScreen from "./editButton/EditButtonScreen";
import FirstPage from "./pages/firstPage";
import SuccessScreen from "./pages/successScreen";
import AdvanceToolScreen from "./AdvancedTools/AdvanceToolScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./BottomScreens/HomeScreen";
import ActivityScreen from "./BottomScreens/ActivityScreen";
import AddUserScreen from "./BottomScreens/AddUserScreen";
import BasesScreen from "./BottomScreens/BasesScreen";
import ProfileScreen from "./BottomScreens/ProfileScreen";
import { Image } from "react-native";
//@ts-ignore
import ProfileTab from "./assets/images/ProfileTab.png";
//@ts-ignore
import Base from "./assets/images/Base.png";
//@ts-ignore
import Activity from "./assets/images/Activity.png";
//@ts-ignore
import AddImage from "./assets/images/AddImage.png";
//@ts-ignore
import HomeImage from "./assets/images/HomeImage.png";
import ActivityFilterScreen from "./BottomScreens/ActivityFilterScreen/ActivityFilterScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Root() {
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
}

export default function App() {
  const [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular,
  });
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const totalScreens = 4;

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleScreenChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#FFFFFF",
            tabBarInactiveTintColor: "#006271",
            tabBarStyle: {
              backgroundColor: "#006271",
              height: 70,
              padding: 10,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
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
            component={Root}
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
            name="ProfileScreen"
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
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    bottom: 60,
  },
});

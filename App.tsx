import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LibreBaskerville_400Regular,
} from "@expo-google-fonts/libre-baskerville";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigators/DrawerNavigator";

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
        <DrawerNavigator />
      </NavigationContainer>
      {/* {activeIndex <= 3 && !drawerOpen && (
        <View style={styles.dotContainer}>
          {[...Array(totalScreens)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === activeIndex ? "#006271" : "#C4C4C4",
                  width: index === activeIndex ? 9 : 6,
                  height: index === activeIndex ? 9 : 6,
                },
              ]}
            />
          ))}
        </View>
      )} */}
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

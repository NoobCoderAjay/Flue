import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { Feather } from "@expo/vector-icons";

const CustomRangeSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Feather name="volume-x" size={24} color="black" />

      <View style={styles.sliderContainer}>
        <View style={styles.sliderLabels}>
          <Text>-2</Text>
          <Text>-1</Text>
          <Text>0</Text>
          <Text>1</Text>
          <Text>2</Text>
        </View>

        <Slider
          style={{ width: "100%", height: 60 }}
          minimumValue={-2}
          maximumValue={2}
          step={1}
          value={value}
          onValueChange={(val) => {
            setValue(val);
          }}
          minimumTrackTintColor="#FFC98A"
          maximumTrackTintColor="#D9D9D9"
          thumbTintColor="#FFC98A"
        />
      </View>

      <Feather name="volume-2" size={24} color="black" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    // position: "absolute",
    top: 160,
  },
  sliderContainer: {
    flex: 1,
    alignItems: "center",
    color: "#999999",
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    color: "#999999",
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default CustomRangeSlider;

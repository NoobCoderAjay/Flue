import React from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
interface SoundBarProps {
  spikes: number[];
}
const SoundBar: React.FC<SoundBarProps> = ({ spikes }) => {
  return (
    <View style={styles.container}>
      {spikes.map((height: any, index: React.Key | null | undefined) => (
        <Animatable.View
          key={index}
          style={[styles.bar, { height: `${height}%` }]}
          animation="bounceIn"
          duration={500}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
  },
  bar: {
    width: 10,
    backgroundColor: "blue",
  },
});

export default SoundBar;

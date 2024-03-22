import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface HeaderProps {
  onAddPress: () => void;
  onSkipPress: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ onAddPress, onSkipPress, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAddPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity
        onPress={onSkipPress}
        style={[styles.button, styles.skipButton]}
      >
        <Text style={[styles.buttonText, styles.skipButtonText]}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
    backgroundColor: "#E2F3FB",
    height: 100,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#006271",
  },
  skipButton: {
    opacity: 0.6,
  },
  skipButtonText: {
    color: "#006271",
  },
  spacer: {
    flex: 1,
  },
});

export default Header;

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface ToolButtonProp {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  borderColor?: string;
  style?: any;
  textColor?: string;
}

const ToolButton: React.FC<ToolButtonProp> = ({
  title,
  onPress,
  backgroundColor = "#FFFFFF",
  borderColor = "#006271",
  style,
  textColor = "#333333",
}) => {
  let buttonBackgroundColor = backgroundColor;
  return (
    <View style={[styles.container, { borderColor }]}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: buttonBackgroundColor },
          style,
        ]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToolButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    // width: "100%",
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    // marginLeft: 5,
  },
});

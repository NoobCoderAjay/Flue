import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import {
  AntDesign,
  SimpleLineIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: string;
  backgroundColor?: string;
  borderColor?: string;
  iconType?: "AntDesign" | "SimpleLineIcons" | "Ionicons" | "Feather";
  variant?: "Default" | "Primary" | "disabled";
  style?: any;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  icon,
  backgroundColor = "#006271",
  borderColor = "transparent",
  iconType = "AntDesign",
  variant = "Default",
  style,
  textColor = "#FFFFFF",
}) => {
  let buttonBackgroundColor = backgroundColor;

  switch (variant) {
    case "Primary":
      buttonBackgroundColor = "#2E7D32";
      break;
    case "disabled":
      textColor = "#666666" || "#006271";
      break;

    default:
      break;
  }

  let IconComponent;
  switch (iconType) {
    case "AntDesign":
      IconComponent = AntDesign;
      break;
    case "SimpleLineIcons":
      IconComponent = SimpleLineIcons;
      break;
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "Feather":
      IconComponent = Feather;
      break;
    default:
      IconComponent = AntDesign;
  }

  return (
    <View style={[styles.container, { borderColor }]}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: buttonBackgroundColor },
          style,
        ]}
        onPress={onPress}
        disabled={variant === "disabled"}
      >
        {/*@ts-ignore */}
        {icon && <IconComponent name={icon} size={24} color={textColor} />}
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingVertical: 13,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Button;

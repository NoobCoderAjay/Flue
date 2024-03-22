import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  DimensionValue,
} from "react-native";
import { Colors } from "../theme/Colors";
import { Size } from "../theme/Size";

interface DrawerButtonProps {
  label: string;
  textColor: Colors;
  color?: Colors;
  height?: number;
  width?: number | string;
  marginBottom?: Size;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
  onPress?(): void;
  image?: ImageSourcePropType;
}

const DrawerButton: React.FC<DrawerButtonProps> = ({
  label,
  textColor,
  color = "transparent",
  height = 40,
  width = "100%",
  marginBottom = "small",
  iconLeft,
  fullWidth = true,
  onPress,
  image,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          height: height,
          width: fullWidth ? "100%" : (width as DimensionValue),
          marginBottom: marginBottom as DimensionValue | undefined,
        },
      ]}
      onPress={onPress}
    >
      {iconLeft && <>{iconLeft}</>}
      {image && <Image source={image} style={styles.image} />}
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default DrawerButton;

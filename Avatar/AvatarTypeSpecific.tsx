import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

interface AvatarTypeSpecificProps {
  onPress?: () => void;
  image: any;
  size?: number;
}

const AvatarTypeSpecific: React.FC<AvatarTypeSpecificProps> = ({
  onPress,
  image,
  size = 50,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[styles.hexagon, { width: size * 2, height: size * 1.155 }]}
      />
      <Image
        source={image}
        style={[styles.image, { width: size, height: size }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  hexagon: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: "transparent",
  },
  image: {
    position: "relative",
    zIndex: 1,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default AvatarTypeSpecific;

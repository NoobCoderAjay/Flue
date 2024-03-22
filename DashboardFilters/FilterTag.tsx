import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../theme/Colors";
import { Size } from "../theme/Size";
import { Caption1 } from "../common/Text";

interface Props {
  label: string;
  isActive?: boolean;
  isSetting?: boolean;
  onPress(): void;
}

const FilterTag: React.FC<Props> = ({
  label,
  isActive,
  isSetting,
  onPress,
}) => {
  const getTagStyle = () => {
    const backgroundColor = isActive
      ? Colors.SECONDARY
      : Colors.SECONDARY_LIGHT;

    return isSetting
      ? {
          ...styles.settingTag,
          backgroundColor,
        }
      : {
          ...styles.tag,
          backgroundColor,
        };
  };

  const getTextColor = () => {
    if (isSetting) {
      return isActive ? Colors.WHITE : Colors.BLACK;
    }
    return Colors.WHITE;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchableWrapper}>
      <View style={getTagStyle()}>
        <Caption1 color={getTextColor()}>{label}</Caption1>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    marginRight: Size.XS,
    marginBottom: Size.XS,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  settingTag: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: Colors.BLACK,
  },
});

export default FilterTag;

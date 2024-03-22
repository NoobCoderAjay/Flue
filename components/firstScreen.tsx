import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

//@ts-ignore
import catImage from "../assets/images/catImage.png";
//@ts-ignore
import Btns from "../assets/images/Btns.png";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

type Props = {
  onScreenChange: (index: number) => void;
};

const FirstScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate("SecondScreen");
    props.onScreenChange(1);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.textColor,
          { fontFamily: "LibreBaskerville_400Regular" },
        ]}
      >
        Let’s teach them to{"\n"}talk
      </Text>
      <View style={styles.imageContainer}>
        <Image source={catImage} style={styles.image} />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={handleBtnPress}>
          <Image source={Btns} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2F3FB",
    margin: 20,
    borderRadius: 20,
    position: "relative",
  },
  textColor: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#006271",
    margin: 40,
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    marginRight: 20,
    marginTop: 20,
  },
  image: {
    width: 350,
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: 7,
    marginLeft: 40,
    position: "absolute",
    bottom: 60,
    left: 0,
  },
});

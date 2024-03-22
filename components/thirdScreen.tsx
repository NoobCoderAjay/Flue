import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
//@ts-ignore
import machineImage from "../assets/images/machineImage.png";
//@ts-ignore
import Btns from "../assets/images/Btns.png";
//@ts-ignore
import Back_2 from "../assets/images/Back_2.png";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
type Props = {
  onScreenChange: (index: number) => void;
};

const ThirdScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate("FourthScreen");
    props.onScreenChange(3);
  };
  const handleBackPress = () => {
    //@ts-ignore
    navigation.navigate("SecondScreen");
    props.onScreenChange(1);
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.textColor]}>
        Right sized {"\n"}buttons that{"\n"}work
      </Text>
      <View style={styles.imageContainer}>
        <Image source={machineImage} style={styles.image} />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={Back_2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBtnPress}>
          <Image source={Btns} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThirdScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE5E5",
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
    marginRight: 2,
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

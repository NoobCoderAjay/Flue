import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
//@ts-ignore
import dogImage from "../assets/images/dogImage.png";
//@ts-ignore
import Btns from "../assets/images/Btns.png";
//@ts-ignore
import Back from "../assets/images/Back.png";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

type Props = {
  onScreenChange: (index: number) => void;
};

const SecondScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate("ThirdScreen");
    props.onScreenChange(2);
  };
  const handleBackPress = () => {
    navigation.navigate("FirstScreen");
    props.onScreenChange(0);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.textColor]}>
        Button kits{"\n"}for every{"\n"}level of{"\n"}learner
      </Text>
      <View style={styles.imageContainer}>
        <Image source={dogImage} style={styles.image} />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={Back} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBtnPress}>
          <Image source={Btns} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBECDA",
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

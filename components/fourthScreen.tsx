import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
//@ts-ignore
import cat_Image from "../assets/images/cat_Image.png";
//@ts-ignore
import Next from "../assets/images/Next.png";
//@ts-ignore
import Back_3 from "../assets/images/Back_3.png";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

type Props = {
  onScreenChange: (index: number) => void;
};

const FourthScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate("ThirdScreen");
    props.onScreenChange(2);
  };
  const handleBtnPressNext = () => {
    navigation.navigate("EditButtonScreen");
    props.onScreenChange(4);
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.textColor]}>
        Join our{"\n"}community{"\n"}of button{"\n"}teachers
      </Text>
      <View style={styles.imageContainer}>
        <Image source={cat_Image} style={styles.image} />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={handleBtnPress}>
          <Image source={Back_3} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBtnPressNext}>
          <Image source={Next} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FourthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BAEEFD",
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
    bottom: 15,
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

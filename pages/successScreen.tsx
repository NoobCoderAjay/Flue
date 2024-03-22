import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../header/Header";
import PageHeader from "../header/PagerHeader";
import Button from "../buttons/buttons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
//@ts-ignore
import Success from "../assets/images/Success.png";

type Props = {};

const SuccessScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleUpdateButtonPress = () => {
    navigation.navigate("FirstPage");
  };
  return (
    <View>
      <Header
        title="Add Button"
        onAddPress={handleUpdateButtonPress}
        onSkipPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <View>
        <PageHeader
          title="Success"
          subheading="Your button has been recorded"
        />
      </View>
      <View style={styles.container}>
        <Image source={Success} />
        {/* <View style={styles.circle1}>
          <View style={styles.circle2}>
            <View style={styles.circle3}>
              <View style={styles.circle4}>
                <AntDesign
                  name="check"
                  size={24}
                  color="green"
                  style={styles.iconStyle}
                />
              </View>
            </View>
          </View>
        </View> */}
      </View>
      <View>
        <Button
          title={"Add More Buttons"}
          onPress={handleUpdateButtonPress}
          backgroundColor="#006271"
        />

        <Button
          title={"Finish"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
          backgroundColor="#ECEEEE"
          textColor="#006271"
        />
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 80 },
  circle1: {
    backgroundColor: "#007f25",
    height: "45%",
    width: "40%",
    borderRadius: 65,
    position: "relative",
    zIndex: 1,
  },
  circle2: {
    backgroundColor: "#30b347",
    height: "80%",
    width: "80%",
    borderRadius: 55,
    position: "absolute",
    zIndex: 2,
    left: "10%",
    top: "10%",
  },
  circle3: {
    backgroundColor: "#9cffbf",
    height: "80%",
    width: "80%",
    borderRadius: 60,
    position: "absolute",
    zIndex: 3,
    left: "10%",
    top: "10%",
  },
  circle4: {
    backgroundColor: "white",
    height: "50%",
    width: "50%",
    borderRadius: 50,
    position: "absolute",
    zIndex: 3,
    left: "24%",
    top: "24%",
  },
  iconStyle: {
    position: "absolute",
    left: "24%",
    top: "24%",
  },
});

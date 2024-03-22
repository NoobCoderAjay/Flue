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
import Finish from "../assets/images/Finish.png";

type Props = {};

const SuccessScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleUpdateButtonPress = () => {
    navigation.navigate("FirstPage");
  };
  const handleFinishButtonPress = () => {
    navigation.navigate("TabNavigator");
  };
  return (
    <View style={styles.container}>
      <Header
        title="Add Button"
        onAddPress={handleUpdateButtonPress}
        onSkipPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <PageHeader title="Success" subheading="Your button has been recorded" />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={Finish} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Add More Buttons"}
          onPress={handleUpdateButtonPress}
          backgroundColor="#006271"
        />

        <Button
          title={"Finish"}
          onPress={handleFinishButtonPress}
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
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 0,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

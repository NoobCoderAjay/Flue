import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../header/Header";
import PageHeader from "../header/PagerHeader";
import AudioRecorder from "../audio/AudioRecorder";
import { useState } from "react";
import Button from "../buttons/buttons";
import { Audio } from "expo-av";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
type FirstPageProps = {
  // onSaveButtonClick: () => void;
};

const FirstPage: React.FC<FirstPageProps> = () => {
  const [isRecording, setIsRecording] = React.useState(false);
  const [ShowButton, setShowButton] = useState(0);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleUpdateButtonPress = () => {
    navigation.navigate("EditButtonScreen");
  };
  const handleStopButtonPress = () => {
    setIsRecording(false);
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
      <View style={styles.wrapper}>
        <View>
          <PageHeader
            title={"Let's record your button"}
            subheading={"This is the word you'll be teaching your learner"}
          />
        </View>
        <View>
          <View>
            <View>
              <AudioRecorder
                isRecording={isRecording}
                setIsRecording={setIsRecording}
                onStopRecording={handleStopButtonPress}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  wrapper: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  // buttonStyle: {
  //   height: "70%",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "flex-end",
  //   justifyContent: "flex-end",
  //   gap: 0,
  // },
  // recordingStyle: {
  //   position: "absolute",
  //   top: 15,
  //   right: "37%",
  // },
  borderButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#007180",
  },
});

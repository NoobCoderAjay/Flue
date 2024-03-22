import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from "expo-av";
import * as Animatable from "react-native-animatable";
import { RecordingOptions } from "expo-av/build/Audio";

import { Size, SizeV2 } from "./size";
import { Colors } from "./Colors";
import AnimatedPressable from "./AnimatedPressable";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../buttons/buttons";
import Slider from "@react-native-community/slider";
import { Feather } from "@expo/vector-icons";
import PageContent from "../content/pageContent";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { LiveAudioVisualizer } from "react-audio-visualize";

export const RECORDING_OPTIONS: RecordingOptions = {
  isMeteringEnabled: true,
  web: {
    mimeType: undefined,
    bitsPerSecond: undefined,
  },
  android: {
    extension: ".m4a",
    outputFormat: Audio.AndroidOutputFormat.MPEG_4,
    audioEncoder: Audio.AndroidAudioEncoder.AAC,
    sampleRate: 44100,
    numberOfChannels: 1,
    bitRate: 128000,
  },
  ios: {
    extension: ".caf",
    audioQuality: Audio.IOSAudioQuality.MAX,
    sampleRate: 44100,
    numberOfChannels: 1,
    bitRate: 128000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
};

interface AudioRecorderProps {
  isRecording: boolean;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  onStopRecording: () => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({
  isRecording,
  setIsRecording,
  onStopRecording,
}) => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [soundUri, setSoundUri] = useState<string | null>(null);
  const soundRef = React.useRef<Audio.Sound | null>(null);
  const [value, setValue] = useState(0);
  const [ShowButton, setShowButton] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPageContent, setShowPageContent] = useState(true);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleUpdateButtonPress = () => {
    navigation.navigate("SuccessScreen");
  };

  const handleButton = (ShowButton: number): void => {
    setShowButton(ShowButton);
  };

  const handleRecordButtonPress = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);
  };

  const handleStopButtonPress = () => {
    setIsRecording(false);
  };

  const handleRecordButtonPressWithCustomAction = () => {
    handleRecordButtonPress();
    handleButton(1);
  };

  const handleStopButtonPressWithCustomAction = () => {
    handleStopButtonPress();
    handleButton(3);
  };

  const startRecording = async () => {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(RECORDING_OPTIONS);
      await newRecording.startAsync();
      setRecording(newRecording);
      setIsRecording(true);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };
  const stopRecording = async () => {
    console.log("Stopping recording..");
    setIsRecording(false);
    onStopRecording();
    await recording?.stopAndUnloadAsync();
    console.log("Recording stopped and saved");
    const uri = await recording?.getURI();
    if (uri) {
      setSoundUri(uri);
    } else {
      console.error("Recording URI is undefined");
    }
  };

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording]);

  useEffect(() => {
    if (soundUri) {
      const loadSound = async () => {
        const { sound } = await Audio.Sound.createAsync({ uri: soundUri });

        setSound(sound);
        soundRef.current = sound;
      };
      loadSound();
    }
  }, [soundUri]);

  const playSound = async () => {
    if (soundRef.current) {
      await soundRef.current.replayAsync();
    }
  };
  const adjustVolume = async (volume: number) => {
    const adjustedVolume = Math.max(0.0, Math.min(volume, 1.0));

    if (soundRef.current) {
      try {
        await soundRef.current.setVolumeAsync(adjustedVolume);
        console.log("successfully set volume");
      } catch (error) {
        console.error("Failed to set volume: ", error);
      }
    }
  };
  const pauseSound = async () => {
    try {
      const result = await soundRef.current?.getStatusAsync();
      if (result?.isLoaded) {
        if (result.isPlaying === true) {
          await soundRef.current?.pauseAsync();
          setIsPlaying(false);
        }
      }
    } catch (error) {
      console.error("Failed to pause sound: ", error);
    }
  };

  const handlePauseButtonPress = async () => {
    pauseSound();
  };

  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <PageContent treatContent="Treat" />
      </View>
      <View style={styles.container}>
        {isRecording && (
          <AnimatedPressable style={[styles.button, styles.playButton]}>
            <FontAwesome name="microphone" size={Size.X3_L} color="white" />
          </AnimatedPressable>
        )}
        {soundUri && !isRecording && (
          <AnimatedPressable
            style={[styles.button, styles.recordButton]}
            onPress={playSound}
          >
            <FontAwesome name="microphone" size={Size.X3_L} color="white" />
          </AnimatedPressable>
        )}
        <View style={styles.containerSlider}>
          <Feather name="volume-x" size={24} color="black" />

          <View style={styles.sliderContainer}>
            <View style={styles.sliderLabels}>
              <Text>-2</Text>
              <Text>-1</Text>
              <Text>0</Text>
              <Text>1</Text>
              <Text>2</Text>
            </View>

            <Slider
              style={{ width: "100%", height: 60 }}
              minimumValue={-2}
              maximumValue={2}
              step={1}
              value={value}
              onValueChange={(val) => {
                setValue(val);
                adjustVolume(val);
              }}
              minimumTrackTintColor="#FFC98A"
              maximumTrackTintColor="#D9D9D9"
              thumbTintColor="#FFC98A"
            />
          </View>

          <Feather
            name="volume-2"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <View style={{ width: "100%", position: "absolute", bottom: 40 }}>
          {ShowButton == 0 && (
            <Button
              title={"Record"}
              onPress={handleRecordButtonPressWithCustomAction}
              backgroundColor={"#2E7D32"}
              icon={"microphone"}
              iconType={"SimpleLineIcons"}
            />
          )}
          {ShowButton == 1 && (
            <Button
              title={"Stop"}
              onPress={handleStopButtonPressWithCustomAction}
              backgroundColor={"#B53C49"}
              icon={"stop-outline"}
              iconType={"Ionicons"}
            />
          )}
          {ShowButton == 2 && (
            <>
              <Button
                title={"Edit"}
                onPress={() => handleButton(3)}
                style={styles.borderButton}
                textColor={"grey"}
              />
              <Button
                title={"Save"}
                onPress={() => {
                  handleButton(0);
                  handleUpdateButtonPress();
                }}
                // onPress={onSaveButtonClick}
                backgroundColor={"#007180"}
              />
            </>
          )}
          {ShowButton == 3 && (
            <>
              <Button
                title={"Play"}
                onPress={() => {
                  handleButton(4);
                  playSound();
                }}
                backgroundColor={"#30AE78"}
                icon={"play-circle"}
                iconType={"Feather"}
              />
              <Button
                title={"Save Changes"}
                onPress={() => handleButton(2)}
                backgroundColor={"#007180"}
              />
            </>
          )}
          {ShowButton == 4 && (
            <>
              <Button
                title={"Pause"}
                onPress={() => {
                  handleButton(3);
                  handlePauseButtonPress();
                }}
                backgroundColor={"#30AE78"}
                icon={"pause"}
                iconType={"Feather"}
              />
              <Button
                title={"Save Changes"}
                onPress={() => handleButton(2)}
                variant="disabled"
                backgroundColor="#EFF0F3"
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};
const BUTTON_DIAMETER = SizeV2.X6_L;
const PLAYER_WIDTH = BUTTON_DIAMETER * 2 + SizeV2.XL;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,

    height: "74%",
    position: "relative",
  },
  visualizer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
  },
  buttonStyle: { padding: 20 },

  playbackText: {
    marginTop: 20,
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
  wavesImage: {
    width: 100,
    height: 100,
  },

  button: {
    width: BUTTON_DIAMETER,
    height: BUTTON_DIAMETER,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BUTTON_DIAMETER,
  },
  recordButton: {
    backgroundColor: Colors.RED,
  },
  playButton: {
    backgroundColor: Colors.GREEN,
  },
  recordButtonDisabled: {
    opacity: 0.2,
  },
  containerSlider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    position: "absolute",
    top: 200,
  },
  sliderContainer: {
    flex: 1,
    alignItems: "center",
    color: "#999999",
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    color: "#999999",
  },
  icon: {
    marginHorizontal: 10,
  },
  borderButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#007180",
  },
});

export default AudioRecorder;

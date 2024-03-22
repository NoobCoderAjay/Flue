import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LiveAudioVisualizer } from "react-audio-visualize";
import React, { useState, useRef, useEffect } from "react";

type Props = {};

const Testing = (props: Props) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  useEffect(() => {
    let mediaRecorder: MediaRecorder | null = null;
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
      })
      .catch((err) => {
        console.error("Error accessing microphone:", err);
      });

    return () => {
      if (mediaRecorder) {
        mediaRecorder.stop();
        mediaRecorder = null;
        mediaRecorderRef.current = null;
      }
    };
  }, []);
  const handleStartStopRecording = () => {
    if (isRecording && mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    } else if (mediaRecorderRef.current) {
      mediaRecorderRef.current.start();
    }
    setIsRecording(!isRecording);
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={handleStartStopRecording}>
          <Text>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
        </TouchableOpacity>
        {mediaRecorderRef.current && (
          <LiveAudioVisualizer
            mediaRecorder={mediaRecorderRef.current}
            width={400}
            height={200}
          />
        )}
      </View>
    </View>
  );
};

export default Testing;

const styles = StyleSheet.create({});

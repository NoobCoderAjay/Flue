import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface PageContentProps {
  treatContent?: string;
}

const PageContent: React.FC<PageContentProps> = ({ treatContent }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.wordText}>Word</Text>
      <View style={styles.treatContainer}>
        <Text style={styles.treatText}>{treatContent}</Text>
        <View style={styles.circle}>
          <AntDesign name="checkcircleo" size={24} color="green" />
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wordText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  treatContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  treatText: {
    fontSize: 14,
    marginRight: 10,
    color: "#333",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E2F3FB",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#D3D3D3",
    marginVertical: 10,
  },
});

export default PageContent;

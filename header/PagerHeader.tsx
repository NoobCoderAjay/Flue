import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PageHeaderProps {
  title: string;
  subheading: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subheading }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subheading}>{subheading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#006271",
  },
  subheading: {
    fontSize: 15,
    color: "#666",
  },
});

export default PageHeader;

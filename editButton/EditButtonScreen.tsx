import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../header/Header";
import PageContent from "../content/pageContent";
import { AntDesign } from "@expo/vector-icons";
import Button from "../buttons/buttons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import CustomTextInput from "../TextInput/CustomTextInput";
type Props = {};

const EditButtonScreen = (props: Props) => {
  const [showForm, setShowForm] = useState(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleUpdateButtonPress = () => {
    navigation.navigate("FirstPage");
  };
  return (
    <View>
      <Header
        onAddPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        onSkipPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        title={"Edit Button"}
      />
      <View style={styles.container}>
        <Text style={styles.textStyle}>Bath</Text>
      </View>
      <View>
        <PageContent treatContent="Bath" />
      </View>

      <View style={[styles.advanceSettings, styles.container]}>
        <Text style={styles.settingText}>High Advanced Settings</Text>
        <TouchableOpacity onPress={() => setShowForm(!showForm)}>
          {showForm ? (
            <AntDesign name="down" size={24} color="black" />
          ) : (
            <AntDesign name="up" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      {showForm && (
        <View>
          <View style={styles.container}>
            <Text style={styles.label}>Median</Text>
            {/* <TextInput style={styles.input} placeholder="Button Meaning" /> */}
            <CustomTextInput placeholder="Button Meaning" />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Date Button Added </Text>
                {/* <TextInput style={styles.input} placeholder="Button Meaning" /> */}
                <CustomTextInput placeholder="Button Meaning" />
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.label}>Button Type</Text>
                {/* <TextInput style={styles.input} placeholder="Classic" /> */}
                <CustomTextInput placeholder="Classic" />
              </View>
            </View>

            <Text style={styles.label}>Web hook url </Text>
            {/* <TextInput style={styles.input} placeholder="URL" /> */}
            <CustomTextInput placeholder="URL" />
            <Text style={styles.label}>More Meaning & Details</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="Meaning of the Button"
            /> */}
            <CustomTextInput placeholder="Meaning of the Button" />
          </View>
          <Button
            title={"Update Button"}
            onPress={handleUpdateButtonPress}
            backgroundColor="#E0E0E0"
            textColor="#9A96B2"
          />
        </View>
      )}
    </View>
  );
};

export default EditButtonScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  textStyle: { color: "#006271", fontSize: 24, fontWeight: "bold" },
  settingText: { color: "#006271", fontSize: 16, fontWeight: "bold" },
  advanceSettings: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#666666",
  },
  input: {
    height: 50,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//@ts-ignore
import ImageNew from "../assets/images/ImageNew.png";
//@ts-ignore
import Solar from "../assets/images/Solar.png";
//@ts-ignore
import TroubleShoot from "../assets/images/TroubleShoot.png";
//@ts-ignore
import Support from "../assets/images/Support.png";
//@ts-ignore
import CrossMark from "../assets/images/CrossMark.png";
//@ts-ignore
import NewAvtar from "../assets/images/NewAvtar.png";
import DrawerButton from "./DrawerButton";

import { Colors } from "../theme/Colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import AvatarTypeSpecific from "../Avatar/AvatarTypeSpecific";

const DrawerContent = () => {
  const [selectedButton, setSelectedButton] = React.useState<string>("");
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleNavigation = () => {
    navigation.navigate("AdvancedToolScreen");
  };

  const handlePress = (buttonLabel: string) => {
    setSelectedButton(buttonLabel);
  };
  const handleCloseDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.crossContainer}
        onPress={handleCloseDrawer}
      >
        <Image source={CrossMark} />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        {/* <Image source={NewAvtar} /> */}
        <AvatarTypeSpecific image={undefined} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Rameet{"\n"}D'Souza</Text>
          <Text style={styles.userEmail}>rameet@sukratu.com</Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <TouchableOpacity style={styles.button}>
          <DrawerButton
            label="Teaching Guides"
            textColor={Colors.WHITE}
            image={ImageNew}
            color={Colors.BLUE_NEW}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <DrawerButton
            label="Advanced Tools"
            textColor={Colors.SECONDARY}
            image={Solar}
            color={Colors.WHITE}
            onPress={handleNavigation}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <DrawerButton
            label="Troubleshooting"
            textColor={Colors.SECONDARY}
            image={TroubleShoot}
            color={Colors.WHITE}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <DrawerButton
            label="Support"
            textColor={Colors.SECONDARY}
            image={Support}
            color={Colors.WHITE}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.button}>
          <DrawerButton
            label="Logout"
            textColor={Colors.RED_NEW}
            iconLeft={
              <SimpleLineIcons name="logout" size={24} color={Colors.RED_NEW} />
            }
            color={Colors.RED_NEW_10}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
  },
  crossContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginRight: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 12,
    color: "#333333",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 55,
  },
  logoutContainer: {
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default DrawerContent;

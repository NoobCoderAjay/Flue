import {
  Image,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useMemo, useState } from "react";
//@ts-ignore
import unassigned from "../assets/images/unassigned.png";
//@ts-ignore
import Recent from "../assets/images/Recent.png";
//@ts-ignore
import filter from "../assets/images/filter.png";
//@ts-ignore
import ActivityAvatarOne from "../assets/images/ActivityAvatarOne.png";
//@ts-ignore
import ActivityAvatarTwo from "../assets/images/ActivityAvatarTwo.png";
//@ts-ignore
import Eat from "../assets/images/Eat.png";
//@ts-ignore
import OutsidePng from "../assets/images/OutsidePng.png";
//@ts-ignore
import Treat from "../assets/images/Treat.png";
//@ts-ignore
import CrossMark from "../assets/images/CrossMark.png";
import ActivityHeader from "./ActivityHeader/ActivityHeader";
import NumberBox from "./ActivityHeader/ActivityBox";
import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import ActivityStackNavigator from "../navigators/StackNavigator";
import CustomBox from "./ActivityHeader/CustomBox";
import RadioButtonGroup, {
  RadioButton,
  RadioGroup,
} from "react-native-radio-buttons-group";
import SnoozeBottomSheetModal from "../common/BottomSheetModel";
type Props = {
  navigation: any;
};

const ActivityScreen = (props: Props) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [showModal, setShowModal] = React.useState(false);
  const handleToggleSwitch = () => {
    toggleSwitch();
    if (!isEnabled) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setIsEnabled(false);
    setShowModal(false);
  };
  const navigateToFilterScreen = () => {
    props.navigation.navigate("ActivityFilterScreen");
  };
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    console.log("drawer is open");
  };
  return (
    <View style={styles.container}>
      <ActivityHeader
        title="Activity"
        icon="menu"
        onPressDrawer={handleOpenDrawer}
      />
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <NumberBox number={23} onPress={() => {}} />
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionTitle}>Snooze notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleToggleSwitch}
            value={isEnabled}
          />
          <SnoozeBottomSheetModal
            visible={showModal}
            onClose={handleCloseModal}
          />
        </View>
        <View style={styles.unassignedSection}>
          <Image source={unassigned} />
          <Text style={styles.unassignedText}>
            You have 15 unassigned Presses
          </Text>
        </View>
        <View style={[styles.recentSections, styles.spaceBetween]}>
          <View style={styles.recentTitleContainer}>
            <Image source={Recent} />
            <Text style={styles.recentTitle}>Recently Added</Text>
          </View>
          <TouchableOpacity onPress={navigateToFilterScreen}>
            <Image source={filter} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <CustomBox
            name={"Floyd Miles"}
            day={"Today | 2:30 4 Replies"}
            image1={ActivityAvatarOne}
            image2={Treat}
            image3={Eat}
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomBox
            name={"Cookie"}
            day={"Today | 2:30 4 Replies"}
            image1={ActivityAvatarTwo}
            image2={Treat}
            image3={Eat}
          />
        </View>
      </View>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2F3FB",
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    margin: 0,
    padding: 20,
    width: "auto",
    height: "100%",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  imageContainer: {
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#006271",
  },
  sectionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  unassignedSection: {
    flexDirection: "row",
  },
  unassignedText: {
    color: "#000000",
    marginLeft: 10,
    fontWeight: "bold",
  },
  recentSections: {
    flexDirection: "row",
    marginTop: 30,
  },
  recentTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentTitle: {
    color: "#666666",
    marginLeft: 10,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  cardContainer: {
    marginTop: 25,
  },
});

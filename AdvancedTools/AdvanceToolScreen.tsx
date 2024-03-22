import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ToolHeader from "./Header/ToolHeader";
import ToolButton from "./ToolButton/ToolButton";
import Divider from "../common/Divider";
import { Colors } from "../theme/Colors";
import { Size, SizeV2 } from "../theme/Size";
//@ts-ignore
import AvtarNew from "../assets/images/AvtarNew.png";
//@ts-ignore
import Icon from "../assets/images/Icon.png";
import Button from "../buttons/buttons";
import ContentButton from "./ToolButton/ContentButton";
import CustomTextInput from "../TextInput/CustomTextInput";
import InviteButton from "./ToolButton/InviteButton";

type Props = {};

const AdvanceToolScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <ToolHeader title="Advanced Tools" icon="arrowleft" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data Export</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                Download CSV file with app data.
              </Text>
              <Text style={styles.sectionText}>
                Ready for ingestion by 3rd Party analytics tools{" "}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <ToolButton
                title="Interactions CSV"
                onPress={() => {}}
                borderColor="#006271"
                textColor="#333333"
                style={{ marginHorizontal: -5 }}
              />
              <ToolButton
                title="Buttons CSV"
                onPress={() => {}}
                borderColor="#006271"
                textColor="#333333"
                style={{ marginHorizontal: 6 }}
              />
            </View>
          </View>
          <Divider
            width={"100%"}
            height={DIVIDER_HEIGHT}
            color={Colors.BLACK_NEW}
            marginTop={SizeV2.L}
            marginBottom={SizeV2.L}
            style={styles.dividerStyle}
          />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shared Household</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                You are the owner of Fluent50879 Household.You can{"\n"}manage
                Household Member's below
              </Text>
            </View>
          </View>
          <Divider
            width={"100%"}
            height={DIVIDER_HEIGHT}
            color={Colors.BLACK_NEW}
            marginTop={SizeV2.L}
            marginBottom={SizeV2.L}
            style={styles.dividerStyle}
          />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Household Members</Text>
            <View style={styles.profileContainer}>
              <Image source={AvtarNew} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Rameet D'Souza</Text>
                <Text style={styles.userEmail}>rameet@sukratu.com</Text>
              </View>

              <InviteButton
                title={"ME"}
                onPress={function (): void {
                  throw new Error("Function not implemented.");
                }}
                backgroundColor="#E2F3FB"
                textColor="#007180"
              />
              <InviteButton
                title={"OWNER"}
                onPress={function (): void {
                  throw new Error("Function not implemented.");
                }}
                backgroundColor="#E2F3FB"
                textColor="#007180"
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Invitations Sent</Text>
            <Text style={styles.invitationText}>! No Invitations Sent</Text>
            <View style={styles.inputContainer}>
              <CustomTextInput
                image={Icon}
                placeholder="Invite Member by Email"
                width={"73%"}
              />
              <View style={styles.inviteButtonContainer}>
                <InviteButton
                  title={"Invite"}
                  onPress={() => {}}
                  style={{ width: "65%", height: 40 }}
                />
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Invitations from other members to {"\n"}join their Households
            </Text>
            <Text style={styles.invitationText}>! No Pending Invitations</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.houseHoldStyle}>Share Households:</Text>
            <Text style={styles.sectionText}>
              Collaborate with other members within a household. {"\n"}All data
              will be shared across members.{"\n"}Once you join a household, you
              can always return to your initial household,and your original data
              will be restored
            </Text>
          </View>
          <Divider
            width={"100%"}
            height={DIVIDER_HEIGHT}
            color={Colors.BLACK_NEW}
            marginTop={SizeV2.L}
            marginBottom={SizeV2.L}
            style={styles.dividerStyle}
          />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Delete Your Account</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                This request submits a request to delete all of your account
                data within 5 business days
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <ContentButton
                title={"Delete Account"}
                onPress={function (): void {
                  throw new Error("Function not implemented.");
                }}
                icon="delete"
                backgroundColor="#F28297"
              />
            </View>
          </View>
          <Divider
            width={"100%"}
            height={DIVIDER_HEIGHT}
            color={Colors.BLACK_NEW}
            marginTop={SizeV2.L}
            marginBottom={SizeV2.L}
            style={styles.dividerStyle}
          />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>App Version</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>0.4.29</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdvanceToolScreen;

const DIVIDER_HEIGHT = 1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2F3FB",
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    margin: 0,
    padding: 20,
    width: "auto",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  section: {
    marginTop: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#006271",
  },
  sectionContent: {
    marginTop: 12,
  },
  sectionText: {
    fontSize: 14,
    color: "#8C8C8C",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  userInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginRight: 60,
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 12,
    color: "#333333",
  },
  invitationText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FE9CAD",
    marginTop: 10,
  },
  dividerStyle: {
    marginHorizontal: 2,
    marginVertical: 2,
  },
  houseHoldStyle: { color: "#787878", fontWeight: "bold" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inviteButtonContainer: {
    marginLeft: 10,
    marginBottom: 15,
  },
});

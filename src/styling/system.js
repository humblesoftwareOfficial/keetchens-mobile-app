import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { FONTS } from "./polices";

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const APP_COLORS = StyleSheet.create({
  PRIMARY_COLOR: {
    color: "#13292A",
  },
  PRIMARY_LIGHT_COLOR: {
    color: "#A3BB98",
  },
  SECONDARY_COLOR: {
    color: "#988780",
  },
  TERTIARY_COLOR: {
    color: "#E7DED9",
  },
  TERTIARY_LIGHT_COLOR: {
    color: "#FFFBF8"
  },
  WHITE_COLOR: {
    color: "#FFF",
  },

  LIGHT_COLOR: {
    color: "#F8F8F8",
  },
  BLACK_LIGHT_COLOR: {
    color: "#242424",
  },
  YELLOW_COLOR: {
    color: "#FFB100", ////pink E58853 //255, 195, 0
  },
  ORANGE_COLOR: {
    color: "#FA9951",
  },
  PINK_COLOR: {
    color: "#E58853",
  },
  BLUE_COLOR: {
    color: "#188CD7",
  },
  GREEN_COLOR: {
    color: "#72E2BE",
  },
  BACKGROUND_GRADIENT: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("screen").height,
  },
  RED_COLOR: {
    color: "#E74020",
  },
});

export const TAG_NAVIGATION_STYLE = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

export const APP_STYLE = StyleSheet.create({
  container_waiting_load_finish: {
    justifyContent: "center",
    // marginTop: 50,
    flex: 1,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
  },
  app_name: {
    color: APP_COLORS.YELLOW_COLOR.color,
    // fontFamily: FONTS.pacificoRegular,
    fontSize: 24,
    textAlign: "center",
  },
  title: {
    color: "#FFF",
    textAlign: "center",
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  local_image_background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section_title: {
    fontFamily: FONTS.bold,
    // fontSize: 22,
    color: APP_COLORS.PRIMARY_COLOR.color,
    textAlign: "center"
  }
});

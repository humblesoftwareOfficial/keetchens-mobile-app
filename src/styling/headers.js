import { Dimensions, StyleSheet } from "react-native";

import { FONTS } from "./polices";
import { APP_COLORS } from "./system";

export const HEADER_STYLE = StyleSheet.create({
  container: {
    padding: 2,
    margin: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    flex: 1,
    flexDirection: "row",
  },
  right: {
    flex: 1,
    flexDirection: "row-reverse",
    margin: 1,
    alignItems: "center",
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
  },
  center: {
    flex: 1,
    flexDirection: "row",
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    margin: 2,
    borderRadius: 50,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    minWidth: Math.ceil(Dimensions.get("window").height / 15),
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#F3F3F3",
  },
  app_container: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  appname: {
    color: APP_COLORS.PRIMARY_COLOR.color,
    fontFamily: FONTS.yesteryear,
    fontSize: 20,
  },
  appname_cont: {
    color: APP_COLORS.PRIMARY_COLOR.color,
    fontFamily: FONTS.pacificoRegular,
    fontSize: 16,
  },
  app_background: {
    backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
    borderRadius: 50,
  },
  label_button: {
    color: APP_COLORS.YELLOW_COLOR.color,
    fontSize: 8,
  },
  title: {
    color: "#FFF",
    fontFamily: FONTS.bold,
  },
});

export const ANIMATED_HEADER_STYLE = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: "rgba(144, 6, 91, 0.04)",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
  },
  animatedContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "#FFF",
    // borderBottomWidth: 1,
    // borderBottomColor: "#EEEEEE",
  },
  container_animated: {
    flexDirection: "row",
    margin: 10,
    flex: 1,
    alignItems: "center",
  },
  picture: {
    margin: 4,
    borderRadius: 50,
  },
  icons: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  center_text: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  middleText: {
    fontFamily: FONTS.bold,
    color: APP_COLORS.YELLOW_COLOR.color,
  },
});

export const TAB_BAR_STYLE = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.BLACK_LIGHT_COLOR.color,
  },
});

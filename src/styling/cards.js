import { Dimensions, StyleSheet } from "react-native";
import { FONTS } from "./polices";
import { APP_COLORS } from "./system";

export const PLACE_CARD_STYLE = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    borderColor: APP_COLORS.LIGHT_COLOR.color,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
  },
  header: {
    padding: 2,
    height: Math.ceil(Dimensions.get("window").height / 2.5),
    // backgroundColor: APP_COLORS.WHITE_COLOR.color,
    borderRadius: 7,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottom_left: {
    flex: 1,
    // backgroundColor: "red"
  },
  bottom_right: {
    alignItems: "center",
  },
  details: {
    marginTop: 10,
  },
  address: {
    fontFamily: FONTS.bold,
  },
  description: {
    fontFamily: FONTS.regular,
    marginTop: 2,
  },
  price: {
    fontFamily: FONTS.bold,
  },
  ranking: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  property: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  property_label: {
    fontFamily: FONTS.regular,
  },
});

export const CARD_MEDIA_LIST_STYLE = StyleSheet.create({
  container: {
    height: Math.ceil(Dimensions.get("window").height / 2.5),
    backgroundColor: APP_COLORS.LIGHT_COLOR.color,
    borderRadius: 7,
  },
  item_media: {
    width: Math.ceil(Dimensions.get("window").width / 11),
    height: Math.ceil(Dimensions.get("window").width / 11),
    margin: 5,
    borderRadius: 4,
  },
  footer_media: {
    marginTop: 5,
  },
  container_footer_medias: {
    marginTop: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
  },
});

export const PREVIEW_PLACE_CARD = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
    borderRadius: 15,
  },
  bottom: {
    marginBottom: 20,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#283B3B", //383939
    alignItems: "center",
  },
  leftBottom: {
    flex: 1,
    justifyContent: "center",
  },
  rightBottom: {
    flex: 1,
  },
  price: {
    // fontFamily: FONTS.bold,
    color: APP_COLORS.YELLOW_COLOR.color,
    // fontSize: 18,
    textAlign: "center",
  },
  option: {
    margin: 2,
    borderRadius: 50,
    backgroundColor: APP_COLORS.YELLOW_COLOR.color,
    padding: 5,
    // justifyContent: "center",
    // alignItems: "center",
    // minWidth: Math.ceil(Dimensions.get("window").height / 15),
  },
  top: {
    padding: 2,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  top_left: {
    flex: 1,
    flexDirection: "row",
    padding: 4,
  },
  top_right: {
    flex: 1,
    flexDirection: "row-reverse",
    padding: 4,
  },
  top_option: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    borderRadius: 50,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    minWidth: Math.ceil(Dimensions.get("window").height / 20),
  },
});

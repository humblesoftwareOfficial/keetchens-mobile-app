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
    // fontFamily: FONTS.regular,
    marginTop: 5,
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
    borderRadius: 50,
    backgroundColor: APP_COLORS.LIGHT_COLOR.color,
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
    borderColor: "#283B3B",
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
  route: {
    borderTopWidth: 1,
    borderColor: "#283B3B",
  },
  route_container: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    borderColor: APP_COLORS.WHITE_COLOR.color,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: APP_COLORS.WHITE_COLOR.color
  },
  map_icon: {
    width: Math.ceil(Dimensions.get("window").width / 11),
    height: Math.ceil(Dimensions.get("window").width / 11),
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  map_right_icon: {
    width: Math.ceil(Dimensions.get("window").width / 11),
    height: Math.ceil(Dimensions.get("window").width / 11),
    // borderRadius: 50,
    // backgroundColor: APP_COLORS.WHITE_COLOR.color,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: APP_COLORS.WHITE_COLOR.color
  },
  route_infos: {
    color: APP_COLORS.WHITE_COLOR.color,
    fontFamily: FONTS.bold,
    // textAlign: "center"
  },
  route_infos_right_icon: {
    // flex: 1,
    flexDirection: "row-reverse",
  },
});

export const ACCOUNT_INFOS_CARD_STYLE = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
  },
});

export const TEAM_MEMBER_CARD_STYLE = StyleSheet.create({
  container: {
    marginBottom: 5,
    // borderBottomWidth: 1,
    padding: 5,
    borderColor: APP_COLORS.LIGHT_COLOR.color,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
  },
  container_infos: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  profile_image: {
    height: Math.ceil(Dimensions.get("window").width / 10),
    width: Math.ceil(Dimensions.get("window").width / 10),
    borderWidth: 1,
    borderColor: APP_COLORS.PRIMARY_COLOR.color,
    // backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
    borderRadius: 50,
    marginRight: 5,
  },
  role: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
  },
  role_label: {
    color: APP_COLORS.WHITE_COLOR.color,
    fontSize: 10,
  }
});

export const ARTICLE_CARD_STYLE = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    borderRadius: 15
  },
  container_infos: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  article_image: {
    height: Math.ceil(Dimensions.get("window").width / 8),
    width: Math.ceil(Dimensions.get("window").width / 8),
    // borderWidth: 1,
    borderColor: APP_COLORS.PRIMARY_COLOR.color,
    backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
    borderRadius: 15,
    marginRight: 5,
  },
  stock_infos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,
    padding: 5,
    borderRadius: 5,
    backgroundColor: APP_COLORS.BLUE_COLOR.color,
  },
  infos_label: {
    color: APP_COLORS.WHITE_COLOR.color,
    fontSize: 10,
  }
})
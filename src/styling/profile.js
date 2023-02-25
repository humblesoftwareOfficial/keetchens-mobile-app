import { Dimensions, StyleSheet } from "react-native";
import { FONTS } from "./polices";
import { APP_COLORS } from "./system";

export const PROFILE_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.LIGHT_COLOR.color,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  profile_image: {
    height: Math.ceil(Dimensions.get("window").width / 7),
    width: Math.ceil(Dimensions.get("window").width / 7),
    borderWidth: 2,
    borderColor: APP_COLORS.PRIMARY_COLOR.color,
    backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
    borderRadius: 50,
    marginRight: 5,
  },
  profile_infos_container: {
    flex: 1,
  },
  profile_infos_name: {
    fontFamily: FONTS.bold,
    color: APP_COLORS.PRIMARY_COLOR.color,
  },
  profile_infos_phone: {
    color: APP_COLORS.PRIMARY_COLOR.color,
  },
  default_image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  disconnect: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    borderRadius: 50,
    backgroundColor: APP_COLORS.RED_COLOR.color,
    height: Math.ceil(Dimensions.get("window").width / 11),
    width: Math.ceil(Dimensions.get("window").width / 11),
  },
  account_options: {
    flex: 1,
    marginTop: 25,
    padding: 5,
    margin: 5,
  },
  account_options_item: {
    borderRadius: 10,
    padding: 12,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    // borderBottomWidth: 1,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
  },
  developer: {
    marginTop: 25,
    justifyContent: "center",
    flexDirection: "row",
    
  },
  made_by: {
    color: APP_COLORS.PRIMARY_COLOR.color,
    fontSize: 12,
    textAlign: "center"
  },
  developer_infos: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    textAlign: "center"
  }
});

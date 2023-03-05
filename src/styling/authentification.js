import { StyleSheet } from "react-native";
import { APP_COLORS } from "./system";

export const AUTHENTICATION_STYLE = StyleSheet.create({
  top: {
    flex: 1,
    padding: 5,
    paddingTop: 25,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    justifyContent: "center"
  },
  bottom: {
    // flex: 1,
    // padding: 5,
  },
  title: {
    fontSize: 34,
    color: APP_COLORS.PRIMARY_COLOR.color,
    textAlign: "center"
  },
  bar_design: {
    padding: 25
  },
  input: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: APP_COLORS.PRIMARY_COLOR.color,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 14,
    marginRight: 14,
    borderRadius: 5
  },
  country_code: {
    padding: 5,
    // height: 45,
    // marginTop: 5,
    // marginLeft: 5,
    // borderRadius: 5,
    borderTopStartRadius: 4,
    borderBottomStartRadius: 4,
    backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
    justifyContent: "center",
    alignItems: "center"
  },
  infos_authentification: {
    marginTop: 14,
    marginLeft: 14,
    marginRight: 14,
  },
  infos_authentification_label: {
    fontSize: 12
  },
  welcome: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  }
});

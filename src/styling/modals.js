import { Dimensions, StyleSheet } from "react-native";

import { APP_COLORS } from "./system";

export const BOTTOM_MODAL_STYLE = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    paddingTop: 12,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  sliderIndicatorRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  sliderIndicator: {
    backgroundColor: APP_COLORS.YELLOW_COLOR.color,
    height: 4,
    width: 45,
    borderRadius: 10,
  },
});

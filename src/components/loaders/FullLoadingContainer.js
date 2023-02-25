import { View } from "react-native";
import React from "react";
import BookingLoading from "./BookingLoading";
import { APP_COLORS } from "../../styling/system";

export default function FullLoadingContainer({}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: APP_COLORS.LIGHT_COLOR.color,
      }}
    >
      <BookingLoading />
    </View>
  );
}

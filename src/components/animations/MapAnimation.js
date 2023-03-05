import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import MAP_ANIMATION from "../../assets/animations/route_animation.json";
import { APP_COLORS } from "../../styling/system";

export default function MapAnimation({
  text = "Chargement ...",
  size = "small",
  color = APP_COLORS.PRIMARY_COLOR.color,
  flex = 1,
  loop = true,
  width = Math.ceil(Dimensions.get("window").width / 5),
  height = Math.ceil(Dimensions.get("window").width / 5),
  center = true,
}) {
  return (
    <View
      style={{
        flex,
        ...(center && {
          justifyContent: "center",
          alignItems: "center",
        }),
      }}
    >
      <AnimatedLottieView
        source={MAP_ANIMATION}
        style={{
          width,
          height,
        }}
        autoPlay
        loop={loop}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

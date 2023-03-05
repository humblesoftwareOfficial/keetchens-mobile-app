import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
        justifyContent: "center"
      }}
    >
      {props.children}
      <Text style={{ textAlign: "center", color: props.color }}>{props.text}</Text>
    </Animated.View>
  );
};

export default FadeInView;

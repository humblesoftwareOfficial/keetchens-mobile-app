import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { SAFE_AREA_VIEW } from "../../styling/screen";
import { APP_STYLE } from "../../styling/system";

export default function Favorites({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <View>
        <Text style={APP_STYLE.section_title}>Favoris</Text>
      </View>
    </SafeAreaView>
  );
}

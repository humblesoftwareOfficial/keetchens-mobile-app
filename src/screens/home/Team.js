import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { SAFE_AREA_VIEW } from "../../styling/screen";
import { APP_STYLE } from "../../styling/system";
import TeamHeader from "../../components/headers/TeamHeader";
import TeamList from "../../components/lists/TeamList";

export default function Team({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <TeamHeader />
      <TeamList />
    </SafeAreaView>
  );
}

import { View } from "react-native";
import React from "react";
import VerticalListSection from "../lists/VerticalListSection";

export default function Section({
  section,
  navigation,
  filterCategories = [],
}) {
  return (
    <View style={{ flex: 1 }}>
      <VerticalListSection
        // customHeader={<HorizontalListHistories />}
        navigation={navigation}
        section={section}
        // filterCategories={filterCategories}
      />
    </View>
  );
}

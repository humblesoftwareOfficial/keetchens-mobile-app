import { View, Text, SafeAreaView, Platform } from "react-native";
import React, { useState } from "react";
import { SAFE_AREA_VIEW, STATUSBAR_HEIGHT } from "../../styling/screen";
import TabBarCategorisation from "../../components/tabbar/TabBarCategorisation";
import { Entypo } from "@expo/vector-icons";
import DiscoverHeader from "../../components/headers/DiscoverHeader";
import { CustomAppBar } from "../../components/shared/CustomAppBar";

const TABS = [
  {
    label: "Chambres",
    code: 1,
  },
  {
    label: "Appartements",
    code: 2,
  },
  {
    label: "Maisons",
    code: 3,
  },
];
export default function Discover({ navigation, route }) {
  const [activeTab, setActiveTab] = useState(0);
  const onChangeTab = ({ position }) => {
    setActiveTab(position);
  };
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <CustomAppBar
        barStyle="dark-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="transparent"
      />
      <DiscoverHeader />
      {/* <TabBarCategorisation
          sections={TABS || []}
          navigation={navigation}
          onChangeTab={onChangeTab}
          filterCategories={[]}
        /> */}
    </SafeAreaView>
  );
}

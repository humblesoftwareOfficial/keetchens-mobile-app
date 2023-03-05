import React from "react";
import { SafeAreaView, View } from "react-native";

import BookingLoading from "../../components/loaders/BookingLoading";
// import { CustomAppBar } from "../../components/shared/CustomAppBar";
import { SAFE_AREA_VIEW } from "../../styling/screen";
import { APP_STYLE, STATUSBAR_HEIGHT } from "../../styling/system";

export default function WelcomPage({}) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <View style={APP_STYLE.container_waiting_load_finish}>
        <BookingLoading text="Bienvenue"/>
      </View>
    </SafeAreaView>
  );
}

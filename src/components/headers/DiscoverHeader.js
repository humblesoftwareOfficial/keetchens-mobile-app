import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HEADER_STYLE } from "../../styling/headers";
import { APP_COLORS } from "../../styling/system";

export default function DiscoverHeader({
  onNewPublication,
  onShowFilter,
  accountType = "",
}) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <View style={HEADER_STYLE.container}>
      <View style={HEADER_STYLE.left}>
        <TouchableOpacity style={HEADER_STYLE.app_container}>
          <Text style={HEADER_STYLE.appname}>Over's Places</Text>
        </TouchableOpacity>
      </View>
      <View style={HEADER_STYLE.right}>
        <TouchableOpacity style={HEADER_STYLE.item}>
          {/* <FontAwesome5 name="search" size={16} color="white" /> */}
          <Ionicons name="ios-location-sharp" size={16} color={APP_COLORS.YELLOW_COLOR.color} />
        </TouchableOpacity>
        <TouchableOpacity
          style={HEADER_STYLE.item}
        //   onPress={() => onShowFilter && onShowFilter()}
        >
          <Ionicons name="options-outline" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

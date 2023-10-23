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
        <View style={HEADER_STYLE.app_background}>
          <TouchableOpacity style={[HEADER_STYLE.app_container, { marginLeft: 5}]}>
            <Text style={[HEADER_STYLE.appname, {color: APP_COLORS.PRIMARY_COLOR.color}]}>K</Text>
            <Text style={[HEADER_STYLE.appname_cont, {color: APP_COLORS.PRIMARY_COLOR.color}]}>{"eetchens"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={HEADER_STYLE.right}>
        {/* <TouchableOpacity style={HEADER_STYLE.item}>
          <Ionicons
            name="ios-location-sharp"
            size={16}
            color={APP_COLORS.YELLOW_COLOR.color}
          />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={HEADER_STYLE.item}
            onPress={() => onShowFilter && onShowFilter()}
        >
          <Ionicons name="options-outline" size={20} color={APP_COLORS.PRIMARY_COLOR.color} />
          <Text style={{ color: APP_COLORS.PRIMARY_COLOR.color }}>Filtres / Recherche</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

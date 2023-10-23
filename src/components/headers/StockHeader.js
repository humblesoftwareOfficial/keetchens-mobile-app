import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HEADER_STYLE } from "../../styling/headers";
import { APP_COLORS, APP_STYLE } from "../../styling/system";
import CustomButton from "../buttons/CustomButton";

export default function StockHeader({
  onNewPublication,
  onShowFilter,
  accountType = "",
}) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <View style={HEADER_STYLE.container}>
      <View style={HEADER_STYLE.left}>
        <View style={HEADER_STYLE.app_background}>
          <TouchableOpacity
            style={[HEADER_STYLE.app_container, { marginLeft: 0 }]}
          >
            <Text style={[APP_STYLE.section_title]}>Suivi stock</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={HEADER_STYLE.right}>
        <CustomButton label="Nouvel article" padding={10}/>
      </View>
    </View>
  );
}

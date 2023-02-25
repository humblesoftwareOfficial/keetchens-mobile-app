import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { PROFILE_STYLE } from "../../../styling/profile";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { APP_COLORS } from "../../../styling/system";

export default function AccountOptions({}) {
  return (
    <View style={PROFILE_STYLE.account_options}>
      <TouchableOpacity style={[PROFILE_STYLE.account_options_item]}>
        <Entypo name="lock" size={24} color={APP_COLORS.PRIMARY_COLOR.color} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: APP_COLORS.PRIMARY_COLOR.color }}>
            Confidentialité et Partage
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[PROFILE_STYLE.account_options_item]}>
        <Ionicons
          name="md-call"
          size={24}
          color={APP_COLORS.PRIMARY_COLOR.color}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: APP_COLORS.PRIMARY_COLOR.color }}>
            Contactez-nous
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[PROFILE_STYLE.account_options_item]}>
        <Entypo
          name="info-with-circle"
          size={24}
          color={APP_COLORS.PRIMARY_COLOR.color}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: APP_COLORS.PRIMARY_COLOR.color }}>
            À propos
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={PROFILE_STYLE.developer}>
        <Text style={PROFILE_STYLE.made_by}>
          {`Made with `}
          <AntDesign
            name="heart"
            size={11}
            color={APP_COLORS.YELLOW_COLOR.color}
          />
          {" by"}
        </Text>
        <Text style={PROFILE_STYLE.developer_infos}>
          {` Humble Software Group`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

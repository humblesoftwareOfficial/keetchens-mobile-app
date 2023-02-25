import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { ACCOUNT_INFOS_CARD_STYLE } from "../../../styling/cards";
import { PROFILE_STYLE } from "../../../styling/profile";
import MediaCard from "../../medias/MediaCard";
import { AntDesign, Feather } from "@expo/vector-icons";
import { APP_COLORS } from "../../../styling/system";
import { isFieldWithValue, truncateText } from "../../../utils";

export default function AccountInfos({ user }) {
  const renderProfileImage = useCallback(
    () =>
      Boolean(isFieldWithValue(user?.profile_picture)) ? (
        <MediaCard square url={user?.profile_picture} squareValue={50} />
      ) : (
        <View style={PROFILE_STYLE.default_image}>
          <Feather name="user" size={24} color={APP_COLORS.WHITE_COLOR.color} />
        </View>
      ),
    []
  );
  return (
    <View style={ACCOUNT_INFOS_CARD_STYLE.container}>
      <View style={PROFILE_STYLE.profile_image}>{renderProfileImage()}</View>
      <View style={PROFILE_STYLE.profile_infos_container}>
        <Text style={PROFILE_STYLE.profile_infos_name} adjustsFontSizeToFit>
          {truncateText(`${user?.firstName} ${user?.lastName}`, 30)}
        </Text>
        <View style={{ marginTop: 5 }}>
          <Text style={PROFILE_STYLE.profile_infos_phone} adjustsFontSizeToFit>
            {user?.phone}
          </Text>
        </View>
      </View>
      <View style={PROFILE_STYLE.disconnect}>
        <AntDesign
          name="logout"
          size={18}
          color={APP_COLORS.WHITE_COLOR.color}
        />
      </View>
    </View>
  );
}

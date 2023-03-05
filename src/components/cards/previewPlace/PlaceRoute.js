import { View, Text, Linking, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { PREVIEW_PLACE_CARD } from "../../../styling/cards";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { APP_COLORS } from "../../../styling/system";
import MapAnimation from "../../animations/MapAnimation";

// import MapboxGL from '@rnmapbox/maps';

export default function PlaceRoute({ position = null, address = "" }) {
  const openAddressOnPlatformMap = (latitude, longitude) => {
    try {
      const scheme = Platform.select({
        ios: "maps:0,0?q=",
        android: "geo:0,0?q=",
      });
      const latLng = `${latitude},${longitude}`;
      const url = Platform.select({
        ios: `${scheme}${address}@${latLng}`,
        android: `${scheme}${latLng}(${address})`,
      });
      Linking.openURL(url);
    } catch (error) {
      console.log({ error });
    }
  };

  const openMapDirection = async (latitude, longitude) => {
    try {
      const url = Platform.select({
        ios: `comgooglemaps://?center=${latitude},${longitude}&q=${latitude},${longitude}&zoom=14&views=traffic"`,
        android: `geo://?q=${latitude},${longitude}`,
      });
      await Linking.openURL(url);
    } catch (error) {
      openAddressOnPlatformMap(latitude, longitude);
    }
  };

  return (
    <TouchableOpacity
      style={PREVIEW_PLACE_CARD.route}
      onPress={() => openMapDirection(position.latitude, position.longitude)}
    >
      <View
        style={PREVIEW_PLACE_CARD.route_container}
        onPress={() => openMapDirection(position.latitude, position.longitude)}
      >
        {/* <View style={PREVIEW_PLACE_CARD.map_icon}>
        <Entypo name="map" size={24} color={APP_COLORS.PRIMARY_COLOR.color} />
      </View> */}
        <View style={{ flex: 1 }}>
          <Text style={PREVIEW_PLACE_CARD.route_infos}>
            Voir l'adresse sur la carte
          </Text>
        </View>
        <View style={PREVIEW_PLACE_CARD.route_infos_right_icon}>
          <View style={PREVIEW_PLACE_CARD.map_right_icon}>
            {/* <FontAwesome
              name="map-marker"
              size={24}
              color={APP_COLORS.RED_COLOR.color}
            /> */}
            <MapAnimation/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

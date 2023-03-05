import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";

import { PREVIEW_PLACE_CARD } from "../../../styling/cards";
import HeaderPlaceCard from "../place/HeaderPlace";
import BottomPlace from "../place/BottomPlace";
import { APP_COLORS } from "../../../styling/system";
import CustomButton from "../../buttons/CustomButton";
import { formatPrice } from "../../../utils";
import PlaceRoute from "./PlaceRoute";

export default function PreviewPlace({ place, onClose }) {

  const callContact = () => {
    const phone = "+221781054800" //
    try {
      Linking.openURL(`tel:${phone}`);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View style={PREVIEW_PLACE_CARD.container}>
      <View style={PREVIEW_PLACE_CARD.top}>
        <View style={PREVIEW_PLACE_CARD.top_left}>
          <TouchableOpacity
            style={PREVIEW_PLACE_CARD.top_option}
            onPress={onClose}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={APP_COLORS.PRIMARY_COLOR.color}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={PREVIEW_PLACE_CARD.top_right}>
          <TouchableOpacity style={[PREVIEW_PLACE_CARD.top_option, {
            backgroundColor: APP_COLORS.PRIMARY_LIGHT_COLOR.color
          }]}
          onPress={callContact}
          >
            <Ionicons
              name="call"
              size={22}
              color={APP_COLORS.PRIMARY_COLOR.color}
            />
            <Text style={{ fontSize: 10 }}>{" Téléphoner "}</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <ScrollView
        style={{ flex: 1, padding: 5, borderRadius: 15 }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderPlaceCard data={place} />
        <View style={{ margin: 5 }}>
          <BottomPlace
            data={{
              ...place,
            }}
            hideRightBottom
            textColor={APP_COLORS.WHITE_COLOR.color}
            priceColor={APP_COLORS.YELLOW_COLOR.color}
          />
        </View>
      </ScrollView>
      <PlaceRoute position={place.position} address={place.address} />
      <View style={PREVIEW_PLACE_CARD.bottom}>
        <View style={PREVIEW_PLACE_CARD.leftBottom}>
          <Text style={[PREVIEW_PLACE_CARD.price]}>
            {formatPrice(place?.price)} XOF / Jour
          </Text>
        </View>
        <View style={PREVIEW_PLACE_CARD.rightBottom}>
          <CustomButton
            label={
              <>
                {` Réserver `}
                <AntDesign name="barcode" size={20} color="black" />
              </>
            }
            textColor={APP_COLORS.PRIMARY_COLOR.color}
            fontWeight="bold"
            // padding={17}
            borderRadius={5}
          />
        </View>
      </View>
    </View>
  );
}

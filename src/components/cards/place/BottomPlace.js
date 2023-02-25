import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { PLACE_CARD_STYLE } from "../../../styling/cards";
import {
  formatPrice,
  isFieldWithValue,
  renderIconProperties,
  renderStar,
} from "../../../utils";
import CustomButton from "../../buttons/CustomButton";
import { APP_COLORS } from "../../../styling/system";
import { Ionicons } from "@expo/vector-icons";

export default function BottomPlace({ data, hideRightBottom = false, textColor = "#000", priceColor = "#000" }) {
  // console.log({ data? })

  const renderPropreties = useCallback(() =>
    data?.properties?.map((value, index) => (
      <View style={PLACE_CARD_STYLE.property} key={value.code} nativeID={index}>
        {renderIconProperties(value.label, textColor )}
        <Text style={[PLACE_CARD_STYLE.property_label, {
          color: textColor,
        }]}>{`  ${value.label}`}</Text>
      </View>
    ))
  );
  return (
    <View style={PLACE_CARD_STYLE.bottom}>
      <View style={PLACE_CARD_STYLE.bottom_left}>
        <View style={PLACE_CARD_STYLE.details}>
          <Text style={[PLACE_CARD_STYLE.address, {
            color: textColor,
          }]}>{data?.address}</Text>
          {isFieldWithValue(data?.description) && (
            <Text style={[PLACE_CARD_STYLE.description, {
              color: textColor,
            }]}>{data?.description}</Text>
          )}
        </View>
        <View style={PLACE_CARD_STYLE.details}>
          <Text style={[PLACE_CARD_STYLE.price, {
            color: priceColor,
          }]}>
            {formatPrice(data?.price)} XOF
          </Text>
        </View>
        <View style={PLACE_CARD_STYLE.details}>{renderPropreties()}</View>
      </View>
      {Boolean(!hideRightBottom) && (
        <View style={PLACE_CARD_STYLE.bottom_right}>
          <CustomButton
            label="Je réserve"
            padding={10}
            textColor={APP_COLORS.PRIMARY_COLOR.color}
            fontWeight="bold"
          />
          <View style={PLACE_CARD_STYLE.ranking}>
            <Ionicons name="md-star-sharp" size={12} color={textColor} />
            <Text style={{ color: textColor, }}>{data?.ranking}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { PLACE_CARD_STYLE } from "../../../styling/cards";
import HeaderPlaceCard from "./HeaderPlace";
import BottomPlace from "./BottomPlace";
import { APP_COLORS } from "../../../styling/system";

const PlaceCard = ({ data, onClick, limitedDescription = false }) => {
  return (
    <TouchableOpacity
      style={[
        PLACE_CARD_STYLE.container,
        {
          borderWidth: data.ranking === 5 ? 1 : 0,
          borderColor: APP_COLORS.YELLOW_COLOR.color,
          backgroundColor: data.ranking === 5 ? APP_COLORS.TERTIARY_LIGHT_COLOR.color : APP_COLORS.WHITE_COLOR.color,
        },
      ]}
      activeOpacity={0.9}
      onPress={() => onClick && onClick(data)}
    >
      <HeaderPlaceCard data={data} onClick={onClick}/>
      <BottomPlace data={data} limitedDescription />
    </TouchableOpacity>
  );
};

export default React.memo(PlaceCard);

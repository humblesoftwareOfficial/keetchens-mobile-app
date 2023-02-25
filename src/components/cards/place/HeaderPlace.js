import { View, Text } from "react-native";
import React, { useCallback } from "react";

import { PLACE_CARD_STYLE } from "../../../styling/cards";
import MediasVerticalList from "../../lists/MediasVerticalList";

export default function HeaderPlaceCard({ data, onClick }) {
  const renderMedias = useCallback(
    () => (
      <MediasVerticalList
        data={data?.medias || []}
        onShowImage={() => onClick && onClick(data)}
      />
    ),
    []
  );
  return <View style={PLACE_CARD_STYLE.header}>{renderMedias()}</View>;
}

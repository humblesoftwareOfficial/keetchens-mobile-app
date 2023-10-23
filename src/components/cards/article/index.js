import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { ARTICLE_CARD_STYLE } from "../../../styling/cards";
import MediaCard from "../../medias/MediaCard";
import { PROFILE_STYLE } from "../../../styling/profile";
import { APP_COLORS } from "../../../styling/system";
import { isFieldWithValue, truncateText } from "../../../utils";
import { AntDesign } from "@expo/vector-icons";

export default function Article({ data }) {
  const renderArticleImage = useCallback(
    () =>
      Boolean(isFieldWithValue(data?.image)) ? (
        <MediaCard square url={data?.image} squareValue={15} />
      ) : (
        <View style={PROFILE_STYLE.default_image}>
          <AntDesign
            name="user"
            size={20}
            color={APP_COLORS.PRIMARY_COLOR.color}
          />
        </View>
      ),
    []
  );
  return (
    <View style={ARTICLE_CARD_STYLE.container}>
      <View style={ARTICLE_CARD_STYLE.container_infos}>
        <View style={ARTICLE_CARD_STYLE.article_image}>
          {renderArticleImage()}
        </View>
        <View style={{ flex: 1 }}>
          <Text adjustsFontSizeToFit>
            {truncateText(`${data?.label || ""}`, 60)}
          </Text>
        </View>
        <View style={ARTICLE_CARD_STYLE.stock_infos}>
          <Text style={ARTICLE_CARD_STYLE.infos_label}>{data?.inStock}</Text>
        </View>
        <View style={ARTICLE_CARD_STYLE.stock_infos}>
          <Text style={ARTICLE_CARD_STYLE.infos_label}>{data?.inStock}</Text>
        </View>
      </View>
    </View>
  );
}

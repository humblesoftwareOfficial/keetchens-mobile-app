import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import BookingLoading from "../loaders/BookingLoading";
import { APP_COLORS } from "../../styling/system";
import FullLoadingContainer from "../loaders/FullLoadingContainer";
import { EPlaceProperties } from "../../utils";
import BottomModal from "../modals/BottomModal";
import PreviewPlace from "../cards/previewPlace";
import DefaultModal from "../modals/DefaultModal";
import { ARTICLE_LIST_STYLE } from "../../styling/lists";
import Article from "../cards/article";

const DATA = [
  {
    code: "1",
    label: "Carotte",
    description: "",
    inStock: 235,
    image: "https://shop.mlouma.com/wp-content/uploads/2023/03/1-2-700x700-1.png"
  },
  {
    code: "2",
    label: "Chou",
    description: "",
    inStock: 758,
    image: "https://www.academiedugout.fr/images/13927/1200-auto/fotolia_37158642_subscription_xl-copy.jpg?poix=50&poiy=50"
  },
  {
    code: "4",
    label: "Citron vert",
    description: "",
    inStock: 156,
    image: "https://lemaitredeslegumes.com/wp-content/uploads/2022/03/citron-vert-lime-1-piece.jpg"
  },
  {
    code: "3",
    label: "Poisson thon",
    description: "",
    inStock: 102,
    image: "https://afritibi.com/wp-content/uploads/2022/10/thon.jpg"
  }
];

export default function ArticleList({ section, naviagtion, customHeader = null }) {
  // console.log({ section });
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isRetreivingData, setIsRetreivingData] = useState(false);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [data, setData] = useState(DATA);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedPlace) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [selectedPlace]);

  const renderItems = useCallback(
    ({ item, index }) => (
      //   <PlaceCard
      //     data={item}
      //     key={item.code}
      //     onClick={onOpenPlace}
      //     limitedDescription
      //     // onShowProfile={onShowProfile}
      //     // onShowPublicationImages={onShowPublicationImages}
      //   />
      <Article key={item.code} data={item} />
    ),
    []
  );

  const onOpenPlace = (place) => {
    setSelectedPlace(place);
  };

  const keyExtractor = useCallback((item) => item.code, []);

  const onEndReached = () => {
    // if (lastRequestHasData) {
    //   if (!isLoading && !isRetreivingData) {
    //     setIsRetreivingData(true);
    //     setPage(page + 1);
    //   }
    // } else {
    // }
  };

  const onRefreshData = () => {
    // setIsLoading(true);
    // if (page > 1) {
    //   setPage(1);
    // } else {
    //   getPublications();
    // }
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedPlace(null);
  };

  return (
    <View style={ARTICLE_LIST_STYLE.parent}>
      {isLoading ? (
        <FullLoadingContainer />
      ) : (
        <FlatList
          style={ARTICLE_LIST_STYLE.container}
          containerStyle={{ borderRadius: 10 }}
          disableIntervalMomentum
          data={data || []}
          renderItem={renderItems}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={6}
          onEndReachedThreshold={0.5}
          updateCellsBatchingPeriod={100}
          initialNumToRender={6}
          onMomentumScrollBegin={() => {
            setOnEndReachedCalledDuringMomentum(false);
          }}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefreshData}
              tintColor={APP_COLORS.PRIMARY_COLOR.color}
              progressBackgroundColor={APP_COLORS.PRIMARY_COLOR.color}
              colors={[APP_COLORS.PRIMARY_COLOR.color]}
            />
          }
          onRefresh={onRefreshData}
          onEndReached={() => onEndReached()}
          refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={customHeader}
          ListFooterComponent={
            isRetreivingData && (
              <ActivityIndicator
                size="small"
                color={APP_COLORS.YELLOW_COLOR.color}
              />
            )
          }
        />
      )}
      <DefaultModal
        show={openModal}
        onClose={closeModal}
        backgroundColor={APP_COLORS.PRIMARY_COLOR.color}
        paddingHorizontal={0}
        content={<PreviewPlace place={selectedPlace} onClose={closeModal} />}
        // minHeight={
        //   showPublicationImages ? MODAL_PIBLICATION_IMAGE : USER_PROFILE_PREVIEW
        // }
        // paddingHorizontal={12}
      />
    </View>
  );
}

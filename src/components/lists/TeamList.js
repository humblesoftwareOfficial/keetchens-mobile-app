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
import PlaceCard from "../cards/place";
import { EPlaceProperties } from "../../utils";
import BottomModal from "../modals/BottomModal";
import PreviewPlace from "../cards/previewPlace";
import DefaultModal from "../modals/DefaultModal";
import { TEAM_LIST_STYLE } from "../../styling/lists";
import TeamMember from "../cards/teamMember";

const DATA = [
  {
    code: "1",
    firstName: "Mamadou Lamine",
    lastName: "THIAM",
    phone: "+221 78 105 48 00",
    role: "Gérant",
    // profile_picture: "https://media.licdn.com/dms/image/D4E03AQG7fJmgWJhFsw/profile-displayphoto-shrink_800_800/0/1674136810447?e=1689811200&v=beta&t=naTMT0U4ADB7hKXSfGmrda5d8QTw2zijCN0hYQTrORQ"
  },
  {
    code: "2",
    firstName: "Abdoulaye",
    lastName: "Sanogo",
    phone: "+221 77 856 24 78",
    role: "Chef Cuisinier"
  },
  {
    code: "3",
    firstName: "Daouda Abdoulaye",
    lastName: "SOW",
    phone: "+221 76 456 20 21",
    role: "Cuisinier"
  },
  {
    code: "4",
    firstName: "Fifi",
    lastName: "AIDARA",
    phone: "+221 76 456 20 21",
    role: "Serveuse"
  },
  {
    code: "5",
    firstName: "Ousmane",
    lastName: "Sylla",
    phone: "+221 76 456 20 21",
    role: "Serveur"
  },
  {
    code: "6",
    firstName: "Mamadou Saliou Ibn",
    lastName: "MBACKE",
    phone: "+221 76 456 20 21",
    role: "Gestionnaire de Stock"
  },

];

export default function TeamList({ section, naviagtion, customHeader = null }) {
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
      <TeamMember key={item.code} data={item}/>
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
    <View style={TEAM_LIST_STYLE.parent}>
      {isLoading ? (
        <FullLoadingContainer />
      ) : (
        <FlatList
          style={TEAM_LIST_STYLE.container}
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

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

const DATA = [
  {
    code: "code-1",
    label: "",
    ranking: 4.5,
    description: "Chambre avec salle de bain intérieur",
    address: "Cité Keur Gorgui, Dakar",
    position: {
      latitude: 14.7117548,
      longitude: -17.4687682,
    },
    price: "25000",
    medias: [
      {
        code: "1",
        url: "https://i.pinimg.com/originals/f0/be/d3/f0bed3cb883d2f5a0858d1c788886022.jpg",
      },
      {
        code: "2",
        url: "https://i.pinimg.com/originals/ce/bb/2d/cebb2daf2a9d420c96ecb3c1eb5bbec3.jpg",
      },
    ],
    properties: [
      {
        code: "0",
        label: EPlaceProperties.Climatisation,
      },
      {
        code: "1",
        label: EPlaceProperties.Wifi,
      },
      {
        code: "2",
        label: EPlaceProperties.Piscine,
      },
      {
        code: "3",
        label: EPlaceProperties.Parking,
      },
    ],
  },
  {
    code: "code-2",
    label: "",
    ranking: 5,
    description: "Chambre de luxe (spacieuse)",
    address: "Mermoz, Dakar",
    position: {
      latitude: 14.7162563,
      longitude: -17.4798573,
    },
    price: "35000",
    medias: [
      {
        code: "3",
        url: "https://1000decos.fr/wp-content/uploads/2018/01/r%C3%A9ussir-une-d%C3%A9coration-chambre-de-luxe.jpg",
      },
      {
        code: "4",
        url: "https://static7.depositphotos.com/1041088/762/i/600/depositphotos_7622520-stock-photo-bright-large-luxury-blue-bedroom.jpg",
      },
    ],
    properties: [
      {
        code: "4",
        label: EPlaceProperties.Climatisation,
      },
      {
        code: "5",
        label: EPlaceProperties.Wifi,
      },
      {
        code: "6",
        label: EPlaceProperties.Piscine,
      },
      {
        code: "7",
        label: EPlaceProperties.Parking,
      },
    ],
  },
  {
    code: "code-3",
    label: "",
    ranking: 4,
    description: "",
    address: "Yoff Diamalaye, Dakar",
    position: {
      latitude: 14.760593,
      longitude: -17.4702556,
    },
    price: "20000",
    medias: [
      {
        code: "5",
        url: "https://www.chateaudefeuilles.com/images/details/chambre_chateau/image-1.jpg",
      },
      {
        code: "6",
        url: "https://www.adressesexclusives.com/wp-content/uploads/2020/06/63268111-1024x620.jpg",
      },
    ],
    properties: [
      {
        code: "8",
        label: EPlaceProperties.Climatisation,
      },
      {
        code: "9",
        label: EPlaceProperties.Wifi,
      },
    ],
  },
  {
    code: "code-4",
    label: "",
    ranking: 4,
    description:
      "Profitez de nos spacieuses Suites Royales, chacune bénéficiant de sa propre décoration combinant ambiance luxueuse et élégance sophistiquée. Climatisation, TV satellite, téléphone, wifi gratuit, salle de bains avec baignoire et douche, sèche cheveux, set de thé & café, coffre fort, lit king size, service de couverture du soir, meubles anciens, collections de tableaux et œuvres d'art, plafonds en bois, marbres, bois précieux, tadelakt, cuivres.",
    address: "Mermoz, Point E, Dakar",
    position: {
      latitude: 14.6971752,
      longitude: -17.4653082,
    },
    price: "30000",
    medias: [
      {
        code: "7",
        url: "https://www.myhoteldeluxe.com/wp-content/uploads/2017/10/hotel-palms-casino-resort-1.jpg",
      },
      {
        code: "8",
        url: "https://voyagezauquotidien.com/wp-content/uploads/2022/04/grand-hyatt-cannes-hotel-martinez-1.webp",
      },
    ],
    properties: [
      {
        code: "10",
        label: EPlaceProperties.Climatisation,
      },
      {
        code: "11",
        label: EPlaceProperties.Wifi,
      },
      {
        code: "12",
        label: EPlaceProperties.Piscine,
      },
      {
        code: "13",
        label: EPlaceProperties.Parking,
      },
    ],
  },
];

export default function VerticalListSection({
  section,
  naviagtion,
  customHeader = null,
}) {
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
      <PlaceCard
        data={item}
        key={item.code}
        onClick={onOpenPlace}
        limitedDescription
        // onShowProfile={onShowProfile}
        // onShowPublicationImages={onShowPublicationImages}
      />
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
    <>
      {isLoading ? (
        <FullLoadingContainer />
      ) : (
        <FlatList
          style={{ backgroundColor: APP_COLORS.WHITE_COLOR.color }}
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
    </>
  );
}

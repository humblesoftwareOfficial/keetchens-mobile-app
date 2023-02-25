import { FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export const SCREENS_NAME = {
  Home: "Home",
};

export const VIEWS_NAME = {
  Discover: "Discover",
  Favorites: "Favorites",
  Profile: "Profile",
};

export const generateKey = () => {
  var key = "";
  var characters =
    "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn1234567890vb0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 15; i++) {
    key += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return key;
};

export const isFieldWithValue = (field) =>
  field && field?.replace(/\s/g, "")?.length;

export const truncateText = (text = "", endTo = 25) =>
  text?.length > endTo ? `${text.substr(0, endTo)}...` : text;

export const formatNumber = (num, div = " ") => {
  return num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, div) || "";
};

export const onlyContainsNumber = (value) =>
  isFieldWithValue(value) && /^\d+$/.test(value);

export const formatPrice = (value = "") =>
  isFieldWithValue(value)
    ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : "";

export const renderStar = (value = 0) => {
  console.log({ value });
  switch (value) {
    case 1:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
        </>
      );
    case 1.5:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-half-sharp" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
        </>
      );
    case 2:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
        </>
      );
    case 2.5:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-half-sharp" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
        </>
      );
    case 3:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
        </>
      );
    case 3.5:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-half-sharp" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
        </>
      );
    case 4:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
        </>
      );
    case 4.5:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-half-sharp" size={14} color="black" />
        </>
      );
    case 5:
      return (
        <>
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
          <Ionicons name="md-star-sharp" size={14} color="black" />
        </>
      );
    default:
      return (
        <>
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
          <Ionicons name="md-star-outline" size={14} color="black" />
        </>
      );
  }
};

export const EPlaceProperties = {
  Wifi: "Wifi",
  Climatisation: "Climatisation",
  Piscine: "Piscine",
  Parking: "Parking",
};

export const renderIconProperties = (label = "", textColor) => {
  switch (label) {
    case EPlaceProperties.Wifi:
      return <Ionicons name="ios-wifi" size={14} color={textColor} />;
    case EPlaceProperties.Piscine:
      return <FontAwesome5 name="swimmer" size={12} color={textColor} />;
    case EPlaceProperties.Parking:
      return <FontAwesome5 name="parking" size={14} color={textColor} />;
    case EPlaceProperties.Climatisation:
      return <MaterialCommunityIcons name="air-conditioner" size={14} color={textColor} />;
    default:
      return <Fontisto name="question" size={14} color={textColor} />;
  }
};

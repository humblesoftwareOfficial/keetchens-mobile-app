import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Cellular from "expo-cellular";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  parse,
  parsePhoneNumber,
} from "libphonenumber-js";

import { SAFE_AREA_VIEW } from "../../styling/screen";
import { APP_COLORS, APP_STYLE } from "../../styling/system";
import { AUTHENTICATION_STYLE } from "../../styling/authentification";
import FadeInView from "../../components/animations/FadeInView";
import DefaultInput from "../../components/inputs/DefaultInput";
import CustomButton from "../../components/buttons/CustomButton";
import BookingLoading from "../../components/loaders/BookingLoading";
import {
  COUNTRIES,
  getFlagEmoji,
  isFieldWithValue,
  SCREENS_NAME,
} from "../../utils";
import { AntDesign } from "@expo/vector-icons";
import { HEADER_STYLE } from "../../styling/headers";

const WIDTH = Dimensions.get("screen").width;

const defaultSNCountry = { country: "Senegal", code: "221", iso: "SN" };

export default function Authentication({ navigation, route }) {
  const [defaultCountry, setDefaultCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    getCountryCode();
  }, []);

  useEffect(() => {
    if (defaultCountry) {
      setIsLoading(false);
    }
  }, [defaultCountry]);

  const getCountryCode = async () => {
    const isoCode = await Cellular.getIsoCountryCodeAsync();
    if (isoCode) {
      const country = COUNTRIES.find(
        (c) => c.iso === isoCode.toLocaleUpperCase()
      );
      if (country) {
        setDefaultCountry(country);
      } else {
        setDefaultCountry(defaultSNCountry);
      }
    } else {
      setDefaultCountry(defaultSNCountry);
    }
  };

  const onChangeCountry = (value) => {
    setDefaultCountry(value);
    setShowCountries(false);
  };

  const onSkip = () => {
    try {
      // navigation.navigate(SCREENS_NAME.)
    } catch (error) {}
  };

  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <TouchableOpacity style={{ flexDirection: "row-reverse", marginTop: 25 }}>
        <AntDesign name="arrowright" size={18} color="#737373" />
        <Text style={{ color: "#737373" }}>Passer cette étape</Text>
      </TouchableOpacity>
      <View style={AUTHENTICATION_STYLE.top}>
        <View style={{ marginBottom: 10 }}>
          <Text style={APP_STYLE.section_title}>Welcome, Bienvenu, Dalal ak Jamm</Text>
        </View>
        <View style={AUTHENTICATION_STYLE.welcome}>
          <Text
            style={[
              HEADER_STYLE.appname,
              { color: APP_COLORS.PRIMARY_COLOR.color, fontSize: 40 },
            ]}
          >
            Perfect
          </Text>
          <Text
            style={[
              HEADER_STYLE.appname_cont,
              { color: APP_COLORS.YELLOW_COLOR.color, fontSize: 40 },
            ]}
          >
            {" Housing"}
          </Text>
        </View>
        <Text style={[AUTHENTICATION_STYLE.infos_authentification_label, { textAlign: "center"}]}>
          Trouver facilement le logement qui vous correspond et séjournez en toute tranquilité.
        </Text>
      </View>
      <View style={AUTHENTICATION_STYLE.bottom}>
        <FadeInView
          style={{
            width: WIDTH,
            padding: 15,
            backgroundColor: APP_COLORS.PRIMARY_COLOR.color,
          }}
          color={APP_COLORS.WHITE_COLOR.color}
          text="Commencer"
        />
        <FadeInView
          style={{
            width: WIDTH,
            padding: 15,
            backgroundColor: APP_COLORS.YELLOW_COLOR.color,
          }}
          color={APP_COLORS.PRIMARY_COLOR.color}
          text="Je me connecte"
        />
        {/* <FadeInView
          style={{
            width: WIDTH,
            padding: 15,
            backgroundColor: APP_COLORS.SECONDARY_COLOR.color,
          }}
          text=""
        />
        <FadeInView
          style={{
            width: WIDTH,
            padding: 15,
            backgroundColor: APP_COLORS.TERTIARY_COLOR.color,
          }}
          text=""
        /> */}
      </View>
    </SafeAreaView>
  );
}

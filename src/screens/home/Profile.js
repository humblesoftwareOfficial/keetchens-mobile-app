import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { SAFE_AREA_VIEW } from "../../styling/screen";
import { APP_STYLE } from "../../styling/system";
import { PROFILE_STYLE } from "../../styling/profile";
import AccountInfos from "../../components/cards/profile/AccountInfos";
import AccountOptions from "../../components/cards/profile/AccountOptions";

export default function Profile({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <View style={{ marginLeft: 3 }}>
        <Text style={APP_STYLE.section_title}>Profil</Text>
      </View>
      <ScrollView
        style={PROFILE_STYLE.container}
        showsVerticalScrollIndicator={false}
      >
        <AccountInfos
          user={{
            firstName: "Mamadou Lamine",
            lastName: "THIAM Mamadou Lamine Mamadou Lamine",
            phone: "+221 78 105 48 00",
            email: "mamadou001thiam@gmail.com",
          }}
        />
        <AccountOptions/>
      </ScrollView>
    </SafeAreaView>
  );
}

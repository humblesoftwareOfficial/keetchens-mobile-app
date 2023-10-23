import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { SAFE_AREA_VIEW } from "../../styling/screen";
import StockHeader from "../../components/headers/StockHeader";
import ArticleList from "../../components/lists/ArticlesList";

export default function Stock({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <StockHeader />
      <ArticleList />
    </SafeAreaView>
  );
}

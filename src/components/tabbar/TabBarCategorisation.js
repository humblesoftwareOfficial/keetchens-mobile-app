import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import ScrollableTabView from "./__refacto";
import TabBar from "react-native-underline-tabbar";

import { APP_COLORS } from "../../styling/system";
import Section from "./Section";
import BookingLoading from "../loaders/BookingLoading";
import { Entypo } from "@expo/vector-icons";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#fff",
    marginTop: -10,
  },
});

const Tab = ({
  tab,
  page,
  isTabActive,
  onPressHandler,
  onTabLayout,
  styles,
}) => {
  const { label } = tab;
  const style = {
    marginHorizontal: 2,
    paddingVertical: 1,
  };
  const containerStyle = {
    borderRadius: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: styles?.backgroundColor,
    opacity: styles?.opacity,
    transform: [{ scale: styles?.opacity }],
    padding: 10,
  };
  const textStyle = {
    color: styles?.textColor || "",
    fontSize: 11
    // fontWeight: "bold",
  };
  return (
    <TouchableOpacity
      style={style}
      onPress={onPressHandler}
      onLayout={onTabLayout}
      key={page}
    >
      <Animated.View style={containerStyle}>
        <Animated.Text style={[textStyle, {
          fontWeight: isTabActive ? "bold": "normal"
        }]}>
          {label}
          {/* {Boolean(isTabActive) && (
            <Entypo name="dot-single" size={24} color="#FFB100" />
          )} */}
          <Entypo name="dot-single" size={24} color={isTabActive ? APP_COLORS.YELLOW_COLOR.color : APP_COLORS.LIGHT_COLOR.color} />
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default class TabBarCategorisation extends Component {
  state = {
    sections: [],
    loading: true,
    length: 6,
  };

  componentDidMount() {
    this.setState(
      {
        sections: this.props.sections,
      },
      () => {
        this.setState({
          loading: false,
          interpolators: Array.from(
            { length: this.props.sections?.length },
            (_, i) => i
          ).map((idx) => ({
            scale: this._scrollX.interpolate({
              inputRange: [idx - 1, idx, idx + 1],
              outputRange: [1, 1.2, 1],
              extrapolate: "clamp",
            }),
            opacity: this._scrollX.interpolate({
              inputRange: [idx - 1, idx, idx + 1],
              outputRange: [0.9, 1, 0.9],
              extrapolate: "clamp",
            }),
            textColor: this._scrollX.interpolate({
              inputRange: [idx - 1, idx, idx + 1],
              outputRange: ["#000", APP_COLORS.PRIMARY_COLOR.color, "#000"],
            }),
            backgroundColor: this._scrollX.interpolate({
              inputRange: [idx - 1, idx, idx + 1],
              outputRange: [
                "rgba(255,255,255,0.1)",
                "rgba(255, 255, 255, 0.9)",
                "rgba(255,255,255,0.1)",
              ],
              extrapolate: "clamp",
            }),
          })),
        });
      }
    );
  }

  _renderTab() {
    return (
      <TabBar
        underlineColor={APP_COLORS.PRIMARY_COLOR.color}
        underlineHeight={4}
        tabBarStyle={{
          backgroundColor: "#FFF",
          borderBottomColor: APP_COLORS.WHITE_COLOR.color,
        }}
        renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
          <Tab
            key={page}
            tab={tab}
            page={page}
            isTabActive={isTabActive}
            onPressHandler={onPressHandler}
            onTabLayout={onTabLayout}
            styles={this.state.interpolators[page] || {}}
          />
        )}
      />
    );
  }

  _scrollX = new Animated.Value(0);

  _renderPage() {
    return this.state.sections?.map((section, idx) => (
      <Section
        tabLabel={{ label: section?.label }}
        section={section}
        key={section?.code}
        navigation={this.props.navigation}
        filterCategories={this.props.filterCategories}
      />
    ));
  }

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        {this.state.loading ? (
          <BookingLoading />
        ) : (
          <View>
            <ScrollableTabView
              renderTabBar={() => this._renderTab()}
              onScroll={(x) => this._scrollX.setValue(x)}
              onChangeTab={({ i, ref, from }) => {
                this.props.onChangeTab &&
                  this.props.onChangeTab({ position: i });
              }}
            >
              {this._renderPage()}
            </ScrollableTabView>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

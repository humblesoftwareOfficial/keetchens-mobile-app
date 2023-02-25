import {
  Feather,
  Ionicons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { APP_COLORS } from "../../styling/system";
import { VIEWS_NAME } from "../../utils";
import Discover from "./Discover";
import Favorites from "./Favorites";
import Profile from "./Profile";

const Tabs = AnimatedTabBarNavigator();

export default ({ navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName={VIEWS_NAME.Discover}
      tabBarOptions={{
        activeBackgroundColor: APP_COLORS.PRIMARY_COLOR.color,
        activeTintColor: APP_COLORS.TERTIARY_COLOR.color,
        inactiveTintColor: APP_COLORS.PRIMARY_COLOR.color,
        showLabel: true,
        tabStyle: {
          backgroundColor: "#FFF",
          borderColor: APP_COLORS.TERTIARY_COLOR.color,
          // borderTopWidth: 1,
          elevation: 1,
        },
        style: {
          position: "absolute",
        },
        tabBarHideOnKeyboard: true,
      }}
      appearance={{
        topPadding: 7,
        horizontalPadding: 10,
        // whenActiveShow: "icon-only",
        whenInactiveShow: "icon-label",
      }}
    >
      <Tabs.Screen
        name={VIEWS_NAME.Favorites}
        component={Favorites}
        options={{
          tabBarLabel: "Favoris",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={focused ? color : APP_COLORS.PRIMARY_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Discover}
        component={Discover}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons
              name="home"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Profile}
        component={Profile}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="user"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_COLOR.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

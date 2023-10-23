import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { APP_COLORS } from "../../styling/system";
import { VIEWS_NAME } from "../../utils";
import Discover from "./Discover";
import Favorites from "./Favorites";
import Profile from "./Profile";
import Team from "./Team";
import Stock from "./Stock";

const Tabs = AnimatedTabBarNavigator();

export default ({ navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName={VIEWS_NAME.Discover}
      tabBarOptions={{
        activeBackgroundColor: APP_COLORS.PRIMARY_COLOR.color,
        activeTintColor: APP_COLORS.WHITE_COLOR.color,
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
        whenInactiveShow: "icon-only",
      }}
    >
      <Tabs.Screen
        name={VIEWS_NAME.Team}
        component={Team}
        options={{
          tabBarLabel: "Equipe",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="group"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Stock}
        component={Stock}
        options={{
          tabBarLabel: "Suvi stock",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="chart-timeline-variant"
              size={size - 3}
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
        name={VIEWS_NAME.Deliveries}
        component={Profile}
        options={{
          tabBarLabel: "Livraisons",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="truck-delivery"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Providers}
        component={Profile}
        options={{
          tabBarLabel: "Fournisseurs",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name="people-carry"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_COLOR.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

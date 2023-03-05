import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import Authentication from "../screens/authentication";
import { default as Home } from "../screens/home";
import { SCREENS_NAME } from "../utils";

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};

export default function Navigation({}) {
  const [isConnected, setIsConnected] = useState(true);
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        {isConnected ? (
          <Stack.Screen
            name={SCREENS_NAME.Home}
            component={Home}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name={SCREENS_NAME.Authentication}
            component={Authentication}
            options={{ headerShown: false }}
          />

          // <Stack.Screen
          //   name={SCREENS_NAME.Authentication}
          //   component={Authentication}
          //   options={{ headerShown: false }}
          // />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

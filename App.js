import { loadAsync, useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Asset } from "expo-asset";
import * as NavigationBar from 'expo-navigation-bar';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import WelcomPage from "./src/screens/wecolme";
import Navigation from "./src/navigation";
import { APP_COLORS } from "./src/styling/system";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#72065b",
    accent: "#f1c40f",
    background: "red",
  },
  dark: true,
};

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => loadAsync(font));
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    avenirBold: require("./src/assets/fonts/AvenirNextLTPro-Bold.otf"),
    avenir: require("./src/assets/fonts/AvenirNextLTPro-Regular.otf"),
    alexBrush: require("./src/assets/fonts/AlexBrush-Regular.ttf"),
    grapeNuts: require("./src/assets/fonts/GrapeNuts-Regular.ttf"),
    belleAurore: require("./src/assets/fonts/LaBelleAurore-Regular.ttf"),
    sacramento: require("./src/assets/fonts/Sacramento-Regular.ttf"),
    yesteryear: require("./src/assets/fonts/Yesteryear-Regular.ttf"),
    snigletRegular: require("./src/assets/fonts/Sniglet-Regular.ttf"),
    snigletBold: require("./src/assets/fonts/Sniglet-ExtraBold.ttf"),
    pacificoRegular: require("./src/assets/fonts/Pacifico-Regular.ttf"),
    righteousRegular: require("./src/assets/fonts/Righteous-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await _loadAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      // require("./assets/stylup.png"),
      // require("./src/assets/images/empty_fun.png"),
      // require("./src/assets/images/empty_fun.png"),
      // require("./src/assets/images/empty.png"),
      // require("./src/assets/images/challenge.png"),
    ]);

    const fontAssets = cacheFonts([
      FontAwesome.font,
      AntDesign.font,
      Entypo.font,
      EvilIcons.font,
      Feather.font,
      Fontisto.font,
      Ionicons.font,
      MaterialCommunityIcons.font,
      MaterialIcons.font,
      SimpleLineIcons.font,
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if (Platform.OS === "android") NavigationBar.setBackgroundColorAsync(APP_COLORS.PRIMARY_COLOR.color);

  return (
    <PaperProvider theme={theme}>
      <RootSiblingParent>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          {fontsLoaded && appIsReady ? <Navigation /> : <WelcomPage />}
        </SafeAreaProvider>
      </RootSiblingParent>
    </PaperProvider>
  );
}

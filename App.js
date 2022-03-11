import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationsContextProvider } from "./src/services/locations/locations.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { SafeArea } from "./src/utils/safe-area.component";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <FavoritesContextProvider>
            <LocationsContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationsContextProvider>
          </FavoritesContextProvider>
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const { Navigator, Screen } = createStackNavigator();

const showHeader = {
  headerShown: true,
};

const hideHeader = {
  headerShown: false,
};

export const SettingsNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="SettingsList"
        component={SettingsScreen}
        options={hideHeader}
      />
      <Screen
        name="Favorites"
        component={FavoritesScreen}
        options={showHeader}
      />
    </Navigator>
  );
};

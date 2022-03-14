import React, { useContext } from "react";
import { Button } from "react-native-paper";
import { SafeArea } from "../../utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Text } from "../../components/typography/text.component";
import { colors } from "../theme/colors";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationsContextProvider } from "../../services/locations/locations.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  const { onLogOut } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button
        mode="contained"
        color={colors.brand.primary}
        onPress={() => onLogOut()}
      >
        Logout
      </Button>
    </SafeArea>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    switch (route.name) {
      case "Restaurants":
        iconName = focused ? "restaurant" : "restaurant-outline";
        break;
      case "Settings":
        iconName = focused ? "settings" : "settings-outline";
        break;
      default:
        iconName = focused ? "map" : "map-outline";
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationsContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationsContextProvider>
    </FavoritesContextProvider>
  );
};

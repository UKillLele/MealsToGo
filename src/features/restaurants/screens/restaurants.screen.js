import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { colors } from "../../../infrastructure/theme/colors";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantList, Loading } from "../components/restaurant-list.styles";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <Search
        onFavoritesToggle={() => setIsToggled(!isToggled)}
        isFavoritesToggled={isToggled}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading ? (
        <Loading animating={true} colors={colors.brand.primary} size={50} />
      ) : (
        <RestaurantList
          data={restaurants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { restaurant: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </>
  );
};

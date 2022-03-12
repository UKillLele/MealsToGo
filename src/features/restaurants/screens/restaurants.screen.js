import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { colors } from "../../../infrastructure/theme/colors";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled(ActivityIndicator)`
  flex: 1;
`;

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

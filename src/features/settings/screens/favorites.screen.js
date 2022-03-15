import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FadeInView } from "../../../components/animations/fade.animation";
import { Text } from "../../../components/typography/text.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import {
  RestaurantList,
  Empty,
} from "../../restaurants/components/restaurant-list.styles";

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return !favorites.length ? (
    <Empty>
      <Text variant="label">No favorites added yet</Text>
    </Empty>
  ) : (
    <RestaurantList
      data={favorites}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", { restaurant: item })
            }
          >
            <FadeInView>
              <RestaurantInfoCard restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        );
      }}
    />
  );
};

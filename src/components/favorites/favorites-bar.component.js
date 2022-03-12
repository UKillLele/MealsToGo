import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";
import { CompactRestaurant } from "../restaurant/compact-restaurant.component";

const FavoritesWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const CardWrapper = styled(TouchableOpacity)`
  margin-right: ${(props) => props.theme.space[3]};
`;
const Header = styled(Text)`
  margin-left: ${(props) => props.theme.space[1]};
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  return (
    favorites.length > 0 && (
      <FavoritesWrapper>
        <Header variant="caption">Favorites</Header>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favorites.map((restaurant) => {
            const key = restaurant.name.split(" ").join("");
            return (
              <CardWrapper
                key={key}
                onPress={() => onNavigate("RestaurantDetails", { restaurant })}
              >
                <CompactRestaurant restaurant={restaurant} />
              </CardWrapper>
            );
          })}
        </ScrollView>
      </FavoritesWrapper>
    )
  );
};

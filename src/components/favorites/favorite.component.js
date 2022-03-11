import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1;
`;

export const Favorite = ({ placeId }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const isFavorite = favorites.find((x) => x === placeId);
  return (
    <>
      <FavoriteButton
        onPress={() => {
          isFavorite ? removeFromFavorites(placeId) : addToFavorites(placeId);
        }}
      >
        <AntDesign
          name={isFavorite ? "heart" : "hearto"}
          size={24}
          color={isFavorite ? "red" : "white"}
        />
      </FavoriteButton>
    </>
  );
};

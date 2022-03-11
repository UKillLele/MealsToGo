import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const add = (placeId) => {
    setFavorites([...favorites, placeId]);
  };
  const remove = (placeId) => {
    const newFavorites = favorites.filter((x) => x !== placeId);
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./locations.service";

export const LocationsContext = createContext();

export const LocationsContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setIsLoading(true);
  };

  useEffect(() => {
    if (keyword.length) {
      locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
          setIsLoading(false);
          setLocation(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }
  }, [keyword]);

  return (
    <LocationsContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

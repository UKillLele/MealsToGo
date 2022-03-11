import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { LocationsContext } from "../../../services/locations/locations.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map.-callout.component";

const { Marker, Callout } = MapView;
const Map = styled(MapView)`
  flex: 1;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationsContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                longitude: restaurant.geometry.location.lng,
                latitude: restaurant.geometry.location.lat,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

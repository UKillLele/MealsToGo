import React from "react";
import { CompactRestaurant } from "../../../components/restaurant/compact-restaurant.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurant restaurant={restaurant} isMap />;
};

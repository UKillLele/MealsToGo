import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favorite } from "../../../components/favorites/favorite.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  Open,
  Type,
  Icons,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
    userRatingsTotal,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((object, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
            <Text variant="caption">{userRatingsTotal}</Text>
          </Rating>
          <Icons>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && (
              <Open>
                <SvgXml xml={open} width={20} height={20} />
              </Open>
            )}
            <Type source={{ uri: icon }} />
          </Icons>
        </Section>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};

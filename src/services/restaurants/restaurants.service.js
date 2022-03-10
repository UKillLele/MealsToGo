import { mockImages, mocks } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    const formattedRestaurant = camelize(restaurant);
    formattedRestaurant.photos = formattedRestaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...formattedRestaurant,
      address: formattedRestaurant.vicinity,
      isOpenNow:
        formattedRestaurant.openingHours &&
        formattedRestaurant.openingHours.openNow,
      isClosedTemporarily:
        formattedRestaurant.businessStatus === "CLOSED_TEMPORARILY",
    };
  });
  return mappedResults;
};

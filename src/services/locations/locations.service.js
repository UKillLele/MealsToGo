import camelize from "camelize";
import { locations } from "./locations.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const { geometry: { location: { lat, lng } } = {} } =
    camelize(result).results[0];
  return { lat, lng };
};

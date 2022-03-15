import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const Loading = styled(ActivityIndicator)`
  flex: 1;
`;

export const Empty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

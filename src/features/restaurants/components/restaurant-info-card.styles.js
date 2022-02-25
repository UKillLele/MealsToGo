import styled from "styled-components";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Open = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
`;
export const Type = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: ${(props) => props.theme.space[2]};
`;
export const Icons = styled.View`
  flex-direction: row;
`;

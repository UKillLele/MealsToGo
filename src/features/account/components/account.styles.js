import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors.js";

export const Background = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const Cover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ActionContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.7);
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const Input = styled(TextInput)`
  width: 300px;
  margin-top: ${(props) => props.theme.space[2]};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  height: 40%;
  width: 100%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;

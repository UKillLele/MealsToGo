import styled from "styled-components/native";
import { List, IconButton } from "react-native-paper";
import { Camera } from "expo-camera";

export const Setting = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

export const Centered = styled.View`
  align-items: center;
  margin: ${(props) => props.theme.space[2]};
`;

export const Preview = styled(Camera)`
  height: 100%;
  width: 100%;
`;

export const CaptureButton = styled(IconButton)`
  height: 80px;
  width: 80px;
  position: absolute;
  background-color: #fff;
  bottom: 30px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

import React from "react";
import { Text } from "../../../components/typography/text.component";
import LottieView from "lottie-react-native";
import {
  Background,
  Cover,
  ActionContainer,
  AuthButton,
  AnimationWrapper,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <Cover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Text variant="title">Meals To Go</Text>
      <ActionContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="email-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </ActionContainer>
    </Background>
  );
};

import React from "react";
import { Text } from "../../../components/typography/text.component";
import {
  Background,
  Cover,
  ActionContainer,
  AuthButton,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <Cover />
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

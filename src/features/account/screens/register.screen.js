import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  Background,
  Cover,
  ActionContainer,
  AuthButton,
  Input,
  ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  return (
    <Background>
      <Cover />
      <Text variant="title">Meals To Go</Text>
      <ActionContainer>
        <Input
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Input
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(p) => setPassword(p)}
        />
        <Input
          label="Confirm Password"
          value={password1}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(p) => setPassword1(p)}
        />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="email-outline"
            mode="contained"
            onPress={() => onRegister(email, password, password1)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={colors.brand.primary} />
        )}
      </ActionContainer>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </Background>
  );
};

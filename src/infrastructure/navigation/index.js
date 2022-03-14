import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { colors } from "../../infrastructure/theme/colors";

export const Navigation = () => {
  const { isAuthenticated, checkingAuth } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {checkingAuth ? (
        <ActivityIndicator animating={true} color={colors.brand.primary} />
      ) : isAuthenticated ? (
        <AppNavigator />
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};

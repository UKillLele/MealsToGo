import React, { useContext } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

const { Section, Item, Icon } = List;

const Setting = styled(Item)`
  padding: ${(props) => props.theme.space[2]};
`;

const Centered = styled.View`
  align-items: center;
  margin: ${(props) => props.theme.space[2]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  return (
    <Section>
      <Centered>
        <Avatar.Icon
          size={180}
          icon="human"
          backgroundColor={colors.brand.primary}
        />
        <Text variant="label">{user.email}</Text>
      </Centered>
      <Setting
        title="Favorites"
        left={(props) => <Icon {...props} color="black" icon="heart" />}
        onPress={() => navigation.navigate("Favorites")}
      />
      <Setting
        title="Logout"
        left={(props) => <Icon {...props} color="black" icon="door" />}
        onPress={onLogOut}
      />
    </Section>
  );
};

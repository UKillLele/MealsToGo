import React, { useContext, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { List, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { Setting, Centered } from "../components/settings.styles";

const { Section, Icon } = List;

export const SettingsScreen = ({ navigation }) => {
  const [userPhoto, setUserPhoto] = useState(null);
  const { onLogOut, user } = useContext(AuthenticationContext);

  useFocusEffect(
    useCallback(async () => {
      try {
        const photo = await AsyncStorage.getItem(`${user.uid}-photo`);
        setUserPhoto(photo);
      } catch (e) {
        console.log(`Error getting photo: ${e}`);
      }
    }, [user])
  );

  return (
    <Section>
      <Centered>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!userPhoto ? (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor={colors.brand.primary}
            />
          ) : (
            <Avatar.Image size={180} source={{ uri: userPhoto }} />
          )}
        </TouchableOpacity>
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

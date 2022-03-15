import React, { useState, useEffect, useRef, useContext } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from "expo-camera";
import { Text } from "../../../components/typography/text.component";
import { Preview, CaptureButton } from "../components/settings.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      try {
        await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        navigation.goBack();
      } catch (e) {
        console.log(`Error saving photo: ${e}`);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <Preview
        ratio="16:9"
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
      <CaptureButton icon="camera" size={40} onPress={snap} />
    </>
  );
};

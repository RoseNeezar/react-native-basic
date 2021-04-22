import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import * as ImagePicker from "react-native-image-picker";

const Layout = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  background-color: teal;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 30px;
  letter-spacing: 2px;
`;

export default function App() {
  const [response, setResponse] = React.useState<any>(null);
  const options: any = {
    title: "Select Image",
    allowsEditing: false,
    quality: 0.9,
    noData: true,
    maxWidth: 1200,
    maxHeight: 1200,
    mediaType: "photo",
    customButtons: [
      { name: "customOptionKey", title: "Choose Photo from Custom Option" },
    ],
    storageOptions: {
      skipBackup: true,
      cameraRoll: false,
    },
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="Take image"
          onPress={() =>
            ImagePicker.launchCamera(
              {
                mediaType: "photo",
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response: any) => {
                setResponse(response);
              }
            )
          }
        />

        <Button
          title="Select image"
          onPress={() =>
            ImagePicker.launchImageLibrary(options, (response: any) => {
              setResponse(response);
            })
          }
        />

        <Button
          title="Take video"
          onPress={() =>
            ImagePicker.launchCamera(
              { mediaType: "video" },
              (response: any) => {
                setResponse(response);
              }
            )
          }
        />

        <Button
          title="Select video"
          onPress={() =>
            ImagePicker.launchImageLibrary(
              { mediaType: "video" },
              (response: any) => {
                setResponse(response);
              }
            )
          }
        />

        <View style={styles.response}>
          <Text>Res: {JSON.stringify(response)}</Text>
        </View>

        {response && (
          <View style={styles.image}>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: response.uri }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: "center",
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});

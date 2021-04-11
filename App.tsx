import React from "react";
import { NativeModules, Platform, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Input from "./src/input";
import Nav from "./src/nav";

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
  font-size: 14px;
  letter-spacing: 2px;
  color: white;
`;

const ButtonContainer = styled.View`
  background-color: purple;
  border-radius: 10px;
  padding: 15px;
`;

export default function App() {
  return (
    <Layout>
      <Nav />
      <Container>
        <TouchableOpacity
          onPress={() => {
            if ((Platform.OS = "ios")) {
              NativeModules.Hello.ShowMessage("Testing NATIVE IOS CODE", 2);
            }
          }}
        >
          <ButtonContainer>
            <Text>Native Toast</Text>
          </ButtonContainer>
        </TouchableOpacity>
        <Pressable onLongPress={() => alert("LONG PRESS")}>
          <ButtonContainer>
            <Text>RN Toast</Text>
          </ButtonContainer>
        </Pressable>
        <Input />
      </Container>
    </Layout>
  );
}

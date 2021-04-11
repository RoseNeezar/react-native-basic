import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

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
  return (
    <Layout>
      <Container>
        <Text>Please help me</Text>
      </Container>
    </Layout>
  );
}

import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

const Layout = styled.View`
  background-color: purple;
  flex: 1;
`;

const Header = styled.Text`
  font-size: 14px;
`;

const Home: FC = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <Header>HOME PAGE</Header>
      <Button
        title="Go to User"
        onPress={() =>
          navigation.navigate("User", {
            id: 32,
            code: "HELLOSOSOSSO",
          })
        }
      />
    </Layout>
  );
};

export default Home;

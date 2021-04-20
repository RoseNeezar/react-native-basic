import { useNavigation, RouteProp, useRoute } from "@react-navigation/core";
import React, { FC } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

const Layout = styled.View`
  background-color: teal;
  flex: 1;
`;

const Header = styled.Text`
  font-size: 14px;
`;

type IRoute = RouteProp<{ user: { id: number; code: string } }, "user">;

const User: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<IRoute>();
  const { code, id } = route.params;

  return (
    <Layout>
      <Header>I want the green</Header>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </Layout>
  );
};

export default User;

import "react-native-gesture-handler";
import React from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Home";
import User from "./src/User";
import { Button } from "react-native";

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode="modal">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="User"
          component={User}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                title="Back HOMEE"
                onPress={() => navigation.navigate("Home")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

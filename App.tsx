import "react-native-gesture-handler";
import React from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home";
import User from "./src/User";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

const Stack = createStackNavigator();
const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Home_settings">
      {(props) => <Text>Home settings</Text>}
    </Stack.Screen>
    <Stack.Screen name="Home_post">
      {(props) => <Text>Home posts</Text>}
    </Stack.Screen>
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const UserTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Users" component={User} />
    <Tab.Screen name="Users_settings">
      {(props) => <Text>user settings</Text>}
    </Tab.Screen>
    <Tab.Screen name="Users_profile">
      {(props) => <Text>user profile</Text>}
    </Tab.Screen>
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Users" component={UserTab} />
        <Drawer.Screen name="Posts">
          {(props) => <Text>Posts </Text>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

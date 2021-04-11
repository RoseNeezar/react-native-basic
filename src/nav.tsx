import React, { FC, ReactNode } from "react";
import styled from "styled-components/native";

interface INav {
  children?: ReactNode;
}

const NavBar = styled.View`
  background-color: purple;
  height: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 14px;
  color: white;
  text-transform: capitalize;
`;
const Nav: FC<INav> = ({ children }) => {
  return (
    <NavBar>
      <Text> {children}</Text>
    </NavBar>
  );
};

export default Nav;

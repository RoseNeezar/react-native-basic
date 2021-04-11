import React, { useState } from "react";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  background-color: gray;
  padding-left: 10px;
`;

const Input = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const { password, username } = formState;
  const onChangeText = (name: string) => (text: string) => {
    setFormState({ ...formState, [name]: text });
  };

  return <TextInput value={username} onChangeText={onChangeText("username")} />;
};

export default Input;

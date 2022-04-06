import React, { useState } from "react";
import {
  addUser,
  setCurrentUser,
  setIsAuthenticated,
} from "store/user/actions";
import { AuthButton, LoginInput } from "../styles";
import { RegisterWrapper } from "./styles";

const RegisterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    addUser({ email, name, password });
    setIsAuthenticated(true);
    setCurrentUser({ email, name, password });
  };

  return (
    <RegisterWrapper>
      <LoginInput
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <LoginInput
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthButton onClick={register}>Register</AuthButton>
    </RegisterWrapper>
  );
};

export default RegisterSection;

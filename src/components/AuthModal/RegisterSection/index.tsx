import React, { useState } from "react";
import { AuthButton, LoginInput } from "../styles";
import { RegisterWrapper } from "./styles";

const RegisterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
      <AuthButton>Register</AuthButton>
    </RegisterWrapper>
  );
};

export default RegisterSection;

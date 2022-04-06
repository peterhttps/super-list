import React, { useState } from "react";
import { AuthButton, LoginInput } from "../styles";
import { LoginWrapper } from "./styles";

const LoginSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginWrapper>
      <LoginInput
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthButton>Login</AuthButton>
    </LoginWrapper>
  );
};

export default LoginSection;

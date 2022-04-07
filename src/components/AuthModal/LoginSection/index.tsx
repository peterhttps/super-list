import React, { useState } from "react";
import { userUsers } from "hooks";
import { loginSession } from "utils/session";

import { AuthButton, Errormessage, LoginInput } from "../styles";
import { LoginWrapper } from "./styles";

const LoginSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { accounts } = userUsers();

  const login = () => {
    const authExists = accounts.find((account) => account.email === email);

    if (!authExists) {
      setErrorMessage("Account does not exists");
      return;
    }

    if (authExists.password !== password) {
      setErrorMessage("Invalid password or email");
      return;
    }

    loginSession(authExists);
  };

  return (
    <LoginWrapper data-testid="login-section-wrapper">
      <LoginInput
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthButton onClick={login}>Login</AuthButton>
      {errorMessage !== "" && <Errormessage>{errorMessage}</Errormessage>}
    </LoginWrapper>
  );
};

export default LoginSection;

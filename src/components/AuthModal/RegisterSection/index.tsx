import { userUsers } from "hooks";
import React, { useState } from "react";
import {
  addUser,
  setCurrentUser,
  setIsAuthenticated,
} from "store/user/actions";
import { registerSession } from "utils/session";
import { AuthButton, Errormessage, LoginInput } from "../styles";
import { RegisterWrapper } from "./styles";

const RegisterSection: React.FC = () => {
  const { accounts } = userUsers();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const register = () => {
    const authExists = accounts.find((account) => account.email === email);

    if (authExists) {
      setErrorMessage("Account already exists");
      return;
    }

    registerSession({ email, name, password }, accounts);
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
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthButton onClick={register}>Register</AuthButton>
      {errorMessage !== "" && <Errormessage>{errorMessage}</Errormessage>}
    </RegisterWrapper>
  );
};

export default RegisterSection;

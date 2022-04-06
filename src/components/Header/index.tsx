import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  AuthButton,
  HeaderInput,
  HeaderInputContainer,
  HeaderWrapper,
  InputLogoContainer,
  TitleLogo,
} from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <TitleLogo>Super List</TitleLogo>
      <HeaderInputContainer>
        <InputLogoContainer>
          <FaSearch size={18} color="white" />
        </InputLogoContainer>
        <HeaderInput />
      </HeaderInputContainer>
      <AuthButton>Entrar</AuthButton>
    </HeaderWrapper>
  );
};

export default Header;

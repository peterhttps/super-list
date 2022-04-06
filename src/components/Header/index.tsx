import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AuthModal from "components/AuthModal";

import {
  AuthButton,
  HeaderInput,
  HeaderInputContainer,
  HeaderWrapper,
  InputLogoContainer,
  TitleLogo,
} from "./styles";

const Header: React.FC = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <HeaderWrapper>
      <TitleLogo>Super List</TitleLogo>
      <HeaderInputContainer>
        <InputLogoContainer>
          <FaSearch size={18} color="white" />
        </InputLogoContainer>
        <HeaderInput />
      </HeaderInputContainer>
      <AuthButton onClick={() => setOpenAuthModal(true)}>Entrar</AuthButton>
      {openAuthModal && <AuthModal openModal={setOpenAuthModal} />}
    </HeaderWrapper>
  );
};

export default Header;

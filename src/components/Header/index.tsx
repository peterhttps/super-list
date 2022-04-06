import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AuthModal from "components/AuthModal";
import { userUsers } from "hooks";
import { logoutSession } from "utils/session";

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
  const { isAuthenticated } = userUsers();

  return (
    <HeaderWrapper>
      <TitleLogo>Super List</TitleLogo>
      <HeaderInputContainer>
        <InputLogoContainer>
          <FaSearch size={18} color="white" />
        </InputLogoContainer>
        <HeaderInput />
      </HeaderInputContainer>
      {isAuthenticated ? (
        <AuthButton onClick={() => logoutSession()}>Logout</AuthButton>
      ) : (
        <AuthButton onClick={() => setOpenAuthModal(true)}>
          Login / Register
        </AuthButton>
      )}

      {openAuthModal && <AuthModal openModal={setOpenAuthModal} />}
    </HeaderWrapper>
  );
};

export default Header;

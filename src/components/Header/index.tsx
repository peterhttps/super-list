import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userUsers } from "hooks";
import { FaSearch } from "react-icons/fa";
import AuthModal from "components/AuthModal";
import { logoutSession } from "utils/session";
import { setCurrentSearch } from "store/list/actions";

import {
  AuthButton,
  HeaderInput,
  HeaderInputContainer,
  HeaderWrapper,
  InputLogoContainer,
  TitleLogo,
} from "./styles";
import { calculateRedirect } from "./helper";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = userUsers();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [searchInput, setSearchInput] = useState(
    location.pathname.split("/")[2]
  );

  useEffect(() => {
    if (location.pathname !== localStorage.getItem("@actualPath")) {
      setCurrentSearch("");
    }
  }, []);

  const onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      calculateRedirect(searchInput, navigate);
    }
  };

  return (
    <HeaderWrapper>
      <TitleLogo>Super List</TitleLogo>
      <HeaderInputContainer>
        <HeaderInput
          onKeyDown={(e) => onKeyDownInput(e)}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search"
          defaultValue={searchInput}
        />
        <InputLogoContainer>
          <FaSearch size={18} color="white" />
        </InputLogoContainer>
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

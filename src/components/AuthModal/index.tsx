import React, { useState, useEffect } from "react";
import { userUsers } from "hooks";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";

import {
  ChooseOption,
  ModalContainer,
  ModalWrapper,
  OptionsContainer,
} from "./styles";

interface IProps {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModal: React.FC<IProps> = ({ openModal }: IProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const { isAuthenticated } = userUsers();

  useEffect(() => {
    if (isAuthenticated) openModal(false);
  }, [isAuthenticated]);

  return (
    <ModalWrapper onClick={() => openModal(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <OptionsContainer>
          <ChooseOption active={isLogin} onClick={() => setIsLogin(true)}>
            Login
          </ChooseOption>
          <ChooseOption active={!isLogin} onClick={() => setIsLogin(false)}>
            Register
          </ChooseOption>
        </OptionsContainer>

        {isLogin ? <LoginSection /> : <RegisterSection />}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default AuthModal;

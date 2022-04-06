import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: auto;
  background: #fff;
  border-radius: 10px;
  color: black;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChooseOption = styled.button<{ active?: boolean }>`
  margin: 0 8px;
  font-size: 14px;
  background: none;
  cursor: pointer;
  border: none;
  font-weight: bold;
  border-bottom: ${(props) => (props.active ? "2px solid #3484d9" : " none")};
`;

export const OptionsContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const LoginInput = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 14px;
  padding: 8px 8px;
  width: 70%;
  margin: 8px 0;
`;

export const AuthButton = styled.button`
  background: #2b6cb0;
  color: white;
  border: none;
  border-radius: 10px;
  width: 30%;
  font-size: 14px;
  padding: 12px 0;
  margin-top: 16px;
  font-weight: bold;
  cursor: pointer;
`;

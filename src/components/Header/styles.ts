import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  justify-content: space-around;
  display: flex;
  background: #2b6cb0;
  padding: 16px 0;
  align-items: center;
`;

export const TitleLogo = styled.h1`
  color: white;
  padding: 0;
  margin: 0;
  font-size: 16px;
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputLogoContainer = styled.div`
  background: #3182ce;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  border-radius: 10px 0 0 10px;
`;

export const HeaderInput = styled.input`
  width: 500px;
  padding: 0 8px;
  height: 32px;
  background: #3182ce;
  border: none;
  border-radius: 0 10px 10px 0;
  color: white;
`;

export const AuthButton = styled.button`
  background: white;
  border: none;
  color: black;
  font-weight: bold;
  width: 72px;
  height: 32px;
  border-radius: 10px;
`;

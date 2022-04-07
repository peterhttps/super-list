import styled from "styled-components";

export const CardWrapper = styled.div`
  background: white;
  width: 250px;
  margin: 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const CardTitle = styled.h1`
  font-size: 18px;
`;

export const CardImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  margin-top: 16px;
`;

export const FavoriteButton = styled.button<{ removeOption?: boolean }>`
  background: ${(props) => (props.removeOption ? "#B82C21" : "#2b6cb0")};
  width: 100%;
  color: white;
  border: none;
  padding: 8px 0;
  font-size: 12px;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 0 0 5px 5px;
  height: auto;

  &:hover {
    background: ${(props) => (props.removeOption ? "#632122" : "#1e4c7d")};
  }
`;

import styled from "styled-components";

export const ListWrapper = styled.div`
  margin-bottom: 16px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  justify-content: space-evenly;
`;

export const PaginationCotainer = styled.div`
  display: flex;
  flex-align: center;
  justify-content: center;
  margin-top: 16px;
`;

export const PaginationButton = styled.button<{ visible: boolean }>`
  background: #2b6cb0;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  margin: 0 16px;
  cursor: pointer;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

import styled from "styled-components";

export const FullListWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 32px;
  width: 1200px;
  align-items: flex-start;
`;

export const CategoriesContainer = styled.div`
  width: 300px;

  & h1 {
    padding: 0;
    margin: 0;
    font-size: 16px;
    margin-left: 16px;
  }

  & section {
    margin: 16px;
    background: white;
    padding: 16px;
    border-radius: 10px;
  }
`;

export const CategorieContainer = styled.div<{ active?: boolean }>`
  margin: 16px;
  background: ${(props) => (props.active ? "#2b6cb0" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  width: 900px;
  height: 100vh;
`;

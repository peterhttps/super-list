import List from "components/List";
import React from "react";
import {
  CategorieContainer,
  CategoriesContainer,
  FullListWrapper,
} from "./styles";

const FullList: React.FC = () => {
  return (
    <FullListWrapper>
      <CategoriesContainer>
        <h1>Categories</h1>
        <CategorieContainer active>All</CategorieContainer>
        <CategorieContainer>Cars</CategorieContainer>
        <CategorieContainer>Clothes</CategorieContainer>
        <CategorieContainer>Foods</CategorieContainer>
      </CategoriesContainer>
      <List isFavorites={false} />
    </FullListWrapper>
  );
};

export default FullList;

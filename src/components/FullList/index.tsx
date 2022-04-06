import React from "react";
import { userUsers } from "hooks";
import List from "components/List";

import {
  CategorieContainer,
  CategoriesContainer,
  FullListWrapper,
} from "./styles";

const FullList: React.FC = () => {
  const { isAuthenticated, currentUser } = userUsers();

  return (
    <FullListWrapper>
      <CategoriesContainer>
        {isAuthenticated && (
          <>
            <h1>Hello, {currentUser.name.split(" ")[0]}</h1>
            <CategorieContainer>Favorites</CategorieContainer>
          </>
        )}
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

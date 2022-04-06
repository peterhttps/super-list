import React from "react";
import { userUsers } from "hooks";
import { useNavigate } from "react-router-dom";
import List from "components/List";

import {
  CategorieContainer,
  CategoriesContainer,
  FullListWrapper,
} from "./styles";

interface IProps {
  isFavorites: boolean;
}

const FullList: React.FC<IProps> = ({ isFavorites }: IProps) => {
  const { isAuthenticated, currentUser } = userUsers();
  const navigate = useNavigate();

  return (
    <FullListWrapper>
      <CategoriesContainer>
        {isAuthenticated && (
          <>
            <h1>Hello, {currentUser.name.split(" ")[0]}</h1>
            <CategorieContainer onClick={() => navigate("/favorites")}>
              Favorites
            </CategorieContainer>
          </>
        )}
        <h1>Categories</h1>
        <CategorieContainer active>All</CategorieContainer>
        <CategorieContainer>Cars</CategorieContainer>
        <CategorieContainer>Clothes</CategorieContainer>
        <CategorieContainer>Foods</CategorieContainer>
      </CategoriesContainer>
      <List isFavorites={isFavorites} />
    </FullListWrapper>
  );
};

export default FullList;

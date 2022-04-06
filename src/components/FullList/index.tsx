import React from "react";
import { userUsers } from "hooks";
import { useLocation, useNavigate } from "react-router-dom";
import List from "components/List";
import RouterContants from "constants/routerContants";

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
  const location = useLocation();

  return (
    <FullListWrapper>
      <CategoriesContainer>
        {isAuthenticated && (
          <>
            <h1>Hello, {currentUser.name.split(" ")[0]}</h1>
            <CategorieContainer
              onClick={() => navigate(RouterContants.FAVORITES)}
              active={location.pathname === RouterContants.FAVORITES}
            >
              Favorites
            </CategorieContainer>
          </>
        )}
        <h1>Categories</h1>
        <CategorieContainer
          onClick={() => navigate(RouterContants.ALL)}
          active={location.pathname === RouterContants.ALL}
        >
          All
        </CategorieContainer>
        <CategorieContainer
          onClick={() => navigate(RouterContants.CARS)}
          active={location.pathname === RouterContants.CARS}
        >
          Cars
        </CategorieContainer>
        <CategorieContainer
          onClick={() => navigate(RouterContants.CLOTHES)}
          active={location.pathname === RouterContants.CLOTHES}
        >
          Clothes
        </CategorieContainer>
        <CategorieContainer
          onClick={() => navigate(RouterContants.FOODS)}
          active={location.pathname === RouterContants.FOODS}
        >
          Foods
        </CategorieContainer>
      </CategoriesContainer>
      <List isFavorites={isFavorites} />
    </FullListWrapper>
  );
};

export default FullList;
